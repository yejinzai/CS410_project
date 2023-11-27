import tensorflow_hub as hub
import faiss


def get_knn(query, scrape_output, k):

    # load the encoder to generate embeddings
    embed = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")

    descriptions = [item['Description'] for item in scrape_output]

    # Pass the sentence list to generate the embeddings
    embeddings = embed(descriptions)

    # Example query sentence
    q = embed([query])

    index = faiss.IndexFlatL2(embeddings.shape[1])
    index.add(embeddings)

    # Perform similarity search using Faiss
    _, result = index.search(q, k)

    output = []
    for i in range(k):
        output.append(scrape_output[result[0][i]])

    return output