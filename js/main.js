// JavaScript file intended to create full file paths
// to be utilized with a Library API

// Targeting specific objects from the DOM
const form = document.querySelector("#form");
const input = document.querySelector("#search");
const results = document.querySelector("#results");
let content = '';

form.addEventListener("submit", e => {
    e.preventDefault();
    // Code line for outputting written user value to console
    //	  console.log(value);

    // Create url-path for API
    const query = input.value;
    const url = `http://openlibrary.org/search.json?q=${query}`;

    // DEBUGGING URL
    //const url = 'http://openlibrary.org/search.json?q=Iron-Man';

    // FETCH base + query
    fetch(url)
        .then(data => data.json())
        // Code line used for testing in console
        //	  .then(data => console.log(data))
        .then(data => displayPage(data))
        .catch(error => console.log('Error Report:', error));
})


// Build results
function displayPage(data) {
    content = `<h1>Results</h1>`
    data.docs.forEach(book => {
        content +=
            `<article> 
			<h1>Book Title: ${book.title}</h1>
			<h2>Author: ${book.author_name}</h2>
			<p>Year Published: ${book.first_publish_year}</p>
            <p>Language(s): ${book.language}</p>
            
			<p>Genre(s): ${book.subject}</p>
            <p>Characters: ${book.person}</p>
			<p>Locations: ${book.place}</p>
			</article>`;
    });

    // Populate the DOM
    results.innerHTML = content;

}