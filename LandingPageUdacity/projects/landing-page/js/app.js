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
const sections = document.getElementsByTagName('section');
const sectionsBoundings = document.querySelector("section").getBoundingClientRect();
const navButtons = document.getElementsByClassName("menu__link");


// for (let navButton of navButtons){
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


// for(let navButton of navButtons){
function navActive(){
    if (sectionsBoundings.top < window.innerHeight ){
        console.log(sectionsBoundings.top);
        console.log(window.innerHeight);
        // document.getElementsByTagName("secNav1").classList.toggle("navActive");
    }else{console.log("nothing");}
}

// document.addEventListener("scroll", navBG);

// function navBG(){
//         for(let navButton of navButtons){
//         if (sectionsBoundings.top <=0 && sectionsBoundings.bottom >= 0 ){
//             document.getElementById(navButton.attributes.id).classList.add("navActive");
//         } else{
//             document.getElementById(navButton.attributes.id).classList.add("navActive");
//         }
//     };
// }

    


window.addEventListener("scroll", navActive());

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


