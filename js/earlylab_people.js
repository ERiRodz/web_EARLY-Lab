// Event listener: waits for the initial HTML document to be fully loaded and parsed, before running the code inside the callback function.
document.addEventListener('DOMContentLoaded', () => { 
  // initiates an HTTP GET request to load the JSON file 
  fetch('../data/peopleLv1.json') // path to people JSON file
  // runs once the fetch request completes and a response is received
    .then(response => {
      // Checks if the HTTP response is OK (status 200–299).
      if (!response.ok) throw new Error('Network response was not ok Lv1'); // NOT, throws an error to be caught later.
      return response.json(); // OK, converts the response data from JSON to a JavaScript object/array.
    })
    // receives the parsed JSON data as a js array; convert each people object into an element of the array members 
    .then(members => {
      // Gets the DOM element with the ID 'peopleLv1-sections' (the placeholder for the dynamically generated sections at Level 1).
      const container = document.getElementById('peopleLv1-sections');
      if (!container) return; // If element with the ID 'peopleLv1-sections' not found, stops execution.
      // .map: array method that creates a new array, member, and apply the function to create a string of HTML for each element of the member array (new array)
      container.innerHTML = members.map(member => `
        <section class="Main_BLOCK">
          <div class="Section_TABLE">
            <div class="Table_COL Table_COL1">
              <img src=${member.pic} alt="member picture">
            </div>                
            <div class="Table_COL Table_COL2">
              <h3 class="Table_HEADER">${member.name} ${member.lastname}</h3>
              <h3 class="Table_SUBHEADER">${member.role} / ${member.position}</h3>
              <p class="Section_TEXT Table_TEXT">${member.description}</p>
              <ul class="Section_LIST INLINELIST">
                <li><a href="${member.cv}" target="_blank">CV</a></li>
                <li><a href="${member.page}" target="_blank">PAGE</a></li>
              </ul>
            </div>                
          </div>
        </section>
      `).join('\n'); // The mapped array of HTML strings is joined together and set as the inner HTML of the container.      
    })
    // Handles any errors that occurred during the fetch or the data processing.
    .catch(error => {
      console.error('Failed to fetch members:', error);
    });
});