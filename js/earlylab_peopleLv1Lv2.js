document.addEventListener('DOMContentLoaded', () => {
  // Fetch and render Level 1 members
  fetch('../data/peopleLv1.json')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok for Lv1');
      return response.json();
    })
    .then(membersLv1 => {
      const containerLv1 = document.getElementById('peopleLv1-sections');
      if (containerLv1 && Array.isArray(membersLv1)) {
        containerLv1.innerHTML = membersLv1.map(member => `
          <section class="Main_BLOCK">
            <div class="Section_TABLE">
              <div class="Table_COL Table_COL1">
                <img src="${member.pic}" alt="member picture">
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
        `).join('\n');
      }

      // Now fetch and render Level 2 members
      return fetch('../data/peopleLv2.json');
    })
    .then(responseLv2 => {
      if (!responseLv2.ok) throw new Error('Network response was not ok for Lv2');
      return responseLv2.json();
    })
    .then(membersLv2 => {
      const containerLv2 = document.getElementById('peopleLv2-sections');
      if (containerLv2 && Array.isArray(membersLv2)) {
        containerLv2.innerHTML = membersLv2.map(member => `
          <section class="Main_BLOCK">
            <div class="Section_TABLE">
              <div class="Table_COL Table_COL1">
                <img src="${member.pic}" alt="member picture">
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
        `).join('\n');
      }
    })
    .catch(error => {
      console.error('Failed to fetch members:', error);
    });
});