// Event listener: waits for the initial HTML document to be fully loaded and parsed, before running the code inside the callback function.
document.addEventListener('DOMContentLoaded', () => { 
  // initiates an HTTP GET request to load the JSON file 
  fetch('../data/news.json') // path JSON file
  // runs once the fetch request completes and a response is received
    .then(response => {
      // Checks if the HTTP response is OK (status 200–299).
      if (!response.ok) throw new Error('Network response was not ok Lv1'); // NOT, throws an error to be caught later.
      return response.json(); // OK, converts the response data from JSON to a JavaScript object/array.
    })
    // receives the parsed JSON data as a js array; convert each people object into an element of the array members 
    .then(news => {
      // Gets the DOM element with the ID 'News_LIST' (the placeholder for the dynamically generated li).
      const container = document.getElementById('News_LIST');
      if (!container) return; // If element with the ID 'News_LIST' not found, stops execution.
      // .map: array method that creates a new array, member, and apply the function to create a string of HTML for each element of the news_item array (new array)
      container.innerHTML = news.map(item => `        
        <li class="News_ITEM"><a href=${item.link}><p class="Section_TEXT">${item.article}</p></a></li>
      `).join('\n'); // The mapped array of HTML strings is joined together and set as the inner HTML of the container.      
    })
    // Handles any errors that occurred during the fetch or the data processing.
    .catch(error => {
      console.error('Failed to fetch members:', error);
    });
});