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
const sections = document.querySelectorAll('section');
const sectionsBoundings = document.querySelector("section").getBoundingClientRect();
const navBtns = document.querySelectorAll(".menu__link");


// for (let navButton of navBtn){
//     navButton.addEventListener('click', clickSmooth);
// }

// function clickSmooth (evt){
//     evt.preventDefault();
//     scroll({behavior:"smooth"});
// }



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


onscroll = function secBackground(e){
    e.preventDefault();
    sections.forEach(section => {
        const secID = section.attributes.id.value;
        const secBound = section.getBoundingClientRect();
        const liveBtnRef = `li a[href="#${secID}"]`;
        if (secBound.top <= secBound.height*0.5 && secBound.bottom >= secBound.height*0.5) {
            document.getElementById(secID).classList.add("your-active-class");
            document.querySelector(liveBtnRef).classList.add("navBtnAct");
        }else{
            document.getElementById(secID).classList.remove("your-active-class");
            document.querySelector(liveBtnRef).classList.remove("navBtnAct");
        }
        
    });
};
       




    


// document.addEventListener("scroll", navActive());

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let i = 1;i<=sections.length;i++){
    const sectionID = document.getElementById("section"+i);
    const newList = document.createElement('li');
    newList.id = "secNav"+i;
    const anchor = document.createElement('a');
    anchor.href = "#section" + i ;
    anchor.innerHTML = sectionID.dataset.nav;
    anchor.className = "menu__link";
    listHead.appendChild(newList).appendChild(anchor);
}


// function navActive (){
//     if (sectionView.top >=0 && document.dataset.secnav === "secNav "+x)
//     document.querySelector("secNav "+x).classList.
// }

// if (elemnt in view port){
//     section nav = > section Nave className = "menu__link:hover"
// }

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


