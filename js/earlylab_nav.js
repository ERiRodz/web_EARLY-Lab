// Dynamically insert navigation elements
document.addEventListener('DOMContentLoaded', () => {
    // Define the navigation items
    const navItems = [
        { text: 'Home', href: 'earlylab_Home.html' },
        { text: 'About', href: 'earlylab_About.html' },
        { text: 'Research', href: 'earlylab_Research.html' },
        { text: 'People', href: 'earlylab_People.html' },
        { text: 'Publications', href: 'earlylab_Publications.html' },
        //{ text: 'Resources', href: '""' },
        { text: 'Contact', href: 'earlylab_Contact.html' }
    ];

    // Get <ul> container for the navigation list
    const ul = document.getElementById('Header_NAVCONTAINER');

    // Loop through the nav items and create <li> for each
    navItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('TAB');

        const a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.href;

        li.appendChild(a);
        ul.appendChild(li);
    });

    // Append the <ul> to the <nav>
    const headerNav = document.getElementById('Header_NAVIGATION');
    headerNav.appendChild(ul);
});



// Manage Nav based on view width
const widthThreshold = 1260;
let nav = document.getElementById('Header_NAVIGATION');
let navCon = document.getElementById('Header_NAVCONTAINER');
let navHam = document.getElementById('Header_NAVHAM');
let getNavTab = document.getElementsByClassName("TAB"); // Each nav tab.
let getWindowWidth = document.getElementsByTagName("BODY")[0].offsetWidth;// Get body width.

let mobileMode = (getWindowWidth > widthThreshold) ? false : true; // Initial state of mobileMode; it goes by the body width.
let navShow = (getWindowWidth < widthThreshold) ? true : false; // Inital state of the nav; it goes by the body width.

// 
let navOnResize = () => {
    getWindowWidth = document.getElementsByTagName("BODY")[0].offsetWidth; // Check body width upon resize.
    
    // Desktop mode.
    if(getWindowWidth > widthThreshold) 
    {
        for(let i = 0; i < getNavTab.length; i++) 
        {
            getNavTab[i].style.display = "inline-block"; // Shows the nav tabs by setting display to inline-block.
            getNavTab[i].style.visibility = "visible"; // Hides nav tabs by setting display to block.
            getNavTab[i].style.paddingBottom = "0px";
            getNavTab[i].style.fontSize = "1.2em";
        }
        
        nav.style.removeProperty('position');
        nav.style.removeProperty('top');
        nav.style.removeProperty('right');
        navCon.style.display = "flex";
        navHam.style.height = "0px";
        navHam.style.display = "none";
        navShow = true; //The nav tabs are visible.
        mobileMode = false; // Desktop mode.
    } 
    // When the body width shrinks and nav tabs are visible. Hides the nav tabs dinamically.
    else if(getWindowWidth < widthThreshold && navShow) 
    {
        for(let i = 0; i < getNavTab.length; i++) 
        {
            getNavTab[i].style.display = "block"; // Display to block.
            getNavTab[i].style.visibility = "hidden"; // Hides nav tabs.
            getNavTab[i].style.paddingBottom = "20px";
            getNavTab[i].style.fontSize = "1em";
        }
        
        nav.style.position = "absolute";
        nav.style.top = "0";
        nav.style.right = "0";
        navCon.style.display = "block";
        navHam.style.height = "auto";
        navHam.style.display = "block";
        navShow = false; // The menu is hidden.
        mobileMode = true; // Mobile mode.
    }
}

//When mobileMode, ham is shown and menu is hidden by default; click the ham to make nav visible on mobileMode.
let dropNav = () => {
    // If nav is hidden.
    if(!navShow) 
    {
        for(let i = 0; i < getNavTab.length; i++) 
        {
            getNavTab[i].style.visibility = "visible"; // Hides nav tabs by setting display to block.
        }
        
        navShow = true;// Nav is visible.
    } 
    // If nav is shown.
    else 
    {
        for(let i = 0; i < getNavTab.length; i++)
        {
            getNavTab[i].style.visibility = "hidden"; // Hides nav tabs.
        }
        
        navShow = false; // Nav is hidden.
    }
}

document.getElementById("Header_NAVHAM").onclick = dropNav; // Clicking the nav.[Only on mobileMode]
document.addEventListener("DOMContentLoaded", () => { 
    navOnResize(); // Call on load when DOM is ready (runs after the DOM is ready, before images/stylesheets).
    window.addEventListener("resize", navOnResize); // Attach on window resize
}); 