console.log("hello world")
function performSearch() {
// Get the search term from the input field
var searchTerm = document.getElementById("searchInput").value;

// Make a GET request to the server
fetch(`http://localhost:5000/api/search?searchTerm=${searchTerm}`, {
   method: 'GET',    
})
        .then(response => {
            // Since mode is 'no-cors', the response will be opaque
            console.log('Response (opaque):', response);
            // Handle the response as needed
           // document.getElementById("searchResults").innerHTML = `<p>${data}</p>`;

        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    }
