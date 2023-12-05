function performSearch() {
    // Get the search term from the input field
    var searchTerm = document.getElementById("searchInput").value;
    const resultElement = document.getElementById('result');

    fetch(`http://localhost:5000/test/search?searchTerm=${searchTerm}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: searchTerm,
            k: 5,
        }),
    })
        .then(response => response.json())
        .then(data => {
            const parsedData = JSON.parse(data);

            // Assuming data is an array of results
            for (let i = 0; i < Math.min(data.length, 5); i++) {
                const resultElement = document.getElementById(`result${i + 1}`);

                resultElement.value = '';
                resultElement.value = JSON.stringify(parsedData[i], null, 2);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
