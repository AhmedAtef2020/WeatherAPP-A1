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
const navlists = document.querySelectorAll("li a");


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

for (let i = 1;i<=sections.length;i++){
    const sectionID = document.getElementById("section"+i);
    const newList = document.createElement('li');
    // newList.id = "secNav"+i;
    const anchor = document.createElement('a');
    anchor.dataset.btn = `sectoin${i}`
    anchor.href = `#section${i}`;
    anchor.innerHTML = sectionID.dataset.nav;
    anchor.className = "menu__link";
    listHead.appendChild(newList).appendChild(anchor);
}



/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 

// Scroll to section on link click

/* ******* Scroll trying for smooth scroll (It was done by CSS) ******* */

navlists.forEach(ele => {
    ele.addEventListener('click', evt => {
        ele.preventDefault();
        const eleID = evt.target.attributes.href.value;
        const toSecID = document.querySelector(eleID);
        const secTop = toSecID.offsetTop;

        // window.scrollTo({
        //     top: secTop,
        //     behavior: "smooth"
        // })

        toSecID.scrollIntoView({
            behavoir: "smooth",
        })
    })
    
});

// navBtns.forEach((navBtn) => {
//     navBtn.
//     navBtn.preventDefault();
//     navBtn.addEventListener("click",() => {
//     const btnHref = navBtn.attributes.href.value;
//     const toSecID = document.querySelector(btnHref);
//     toSecID.scrollIntoView({
//         behavoir: "smooth",
//         block: "start"
//     })}
//     );
    
// })


// for (const navBtn of navBtns) {
//     const btnHref = navBtn.attributes.href.value;
//     console.log(btnHref);
//     const toSecID = document.querySelector(`#${btnData}`);

//     navBtn.addEventListener("click", () => {
//         preventDefault();
//         toSecID.scrollIntoView({
//             behavoir: "smooth",
//             block: "start"
//         })
//     }) 
// }


// Set sections as active

onscroll = function activeElemnts(e){
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
       


// document.addEventListener("scroll", activeElemnts());

