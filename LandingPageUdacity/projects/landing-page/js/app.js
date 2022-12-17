/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const listHead = document.querySelector("#navbar__list");
// const i = 1;
const names = document.getElementsByTagName('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let i = 1;i<=names.length;i++){
const sectionID = document.getElementById("section"+i);
const createList = document.createElement('li');
const anchor = document.createElement('a');
anchor.href = "#section" + i ;
anchor.innerHTML = sectionID.dataset.nav;
listHead.appendChild(createList).appendChild(anchor);
}
// .innerHTML = '<a href=\"sectionID\">' + sectionID.dataset.nav + '</a>'
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


