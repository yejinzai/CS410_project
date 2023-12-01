function performSearch() {
// Get the search term from the input field
var searchTerm = document.getElementById("searchInput").value;

// Make a GET request to the server
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
//.then(response => response.json())
  //  .then(data => console.log(data))
   // .catch(error => console.error('Error:', error));
        .then(response => {
            // Since mode is 'no-cors', the response will be opaque
            console.log('Response (opaque):', response);
            // Handle the response as needed
            document.getElementById("searchResults").innerHTML = `<p>${response}</p>`;

        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
