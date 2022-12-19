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
const listHead = document.querySelector("#navbar__list"); // Identify list head to append the navbar to 
const sections = document.querySelectorAll("section"); // array for all sections
const fragmentEle = document.createDocumentFragment(); // to use in navbar loop
let noScrollPos = window.pageYOffset; // window Scroll in top


/* *** assigned but not used *** */
// const navlists = document.querySelectorAll("li a"); // Array to identify the links in navbar
// const sectionsBoundings = document.querySelector("section").getBoundingClientRect(); // to get the bounding data of section
// const navBtns = document.querySelectorAll(".menu__link"); // to identify the links in navbar but prefer no to use

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
/* loop over all sections, create "list element", then create "a" link element.
 * add both elements to a fragment element, then add it after loop as Child to nav tag (nav part)
 * also create the smooth scroll inside this loop to applay for each element in sections.
 */
sections.forEach((section, i) =>
{
    const newList = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.dataset.btn = `sectoin${i+1}`
    anchor.href = `#section${i+1}`;
    anchor.innerHTML = section.dataset.nav;
    anchor.className = "menu__link";
    fragmentEle.appendChild(newList).appendChild(anchor);

    anchor.addEventListener("click", (e) =>
    {
        e.preventDefault();
        section.scrollIntoView(
        {
            behavior: "smooth"
        });
    })

});
listHead.appendChild(fragmentEle);



// Set sections as active

/* using onscroll funcion as the addEvenListener for document scroll not working as needed 
 * Also loops over sections and by using the bounds of section (top and bottom) 
 * and add or remove class of active for both navbar and sections backgrounds 
 */

onscroll = (e) =>
{
    e.preventDefault();
    sections.forEach(section =>
    {
        const secID = section.attributes.id.value;
        const secBound = section.getBoundingClientRect();
        const liveBtnRef = `li a[href="#${secID}"]`;
        if (secBound.top <= secBound.height * 0.25 && secBound.bottom >= secBound.height * 0.25)
        {
            document.getElementById(secID).classList.add("your-active-class");
            document.querySelector(liveBtnRef).classList.add("navBtnAct");
        }
        else
        {
            document.getElementById(secID).classList.remove("your-active-class");
            document.querySelector(liveBtnRef).classList.remove("navBtnAct");
        }

    });

/** when scrol down the nav bar disappear and whin scroll up appear again */
    let withScrollPos = window.pageYOffset;
    
    if (noScrollPos > withScrollPos)
    {
        document.querySelector(".navbar__menu").style.top = "0";
    }
    else
    {
        document.querySelector(".navbar__menu").style.top = "-50px";
    }
    noScrollPos = withScrollPos; //every time reset valus to start the action from this point

};



/* with the scroll
*/



// all the down are tries I keept them for a refrance for me 

// document.addEventListener("scroll", activeElemnts());


/* ******* Started with the bottom code and imporove to above one :) ******* */

// for (let i = 1;i<=sections.length;i++){
//     const sectionID = document.getElementById("section"+i);
//     const newList = document.createElement('li');
//     // newList.id = "secNav"+i;
//     const anchor = document.createElement('a');
//     anchor.dataset.btn = `sectoin${i}`
//     anchor.href = `#section${i}`;
//     anchor.innerHTML = sectionID.dataset.nav;
//     anchor.className = "menu__link";
//     listHead.appendChild(newList).appendChild(anchor);
// }



/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 

// Scroll to section on link click

/* ******* Scroll trying for smooth scroll (It was done by CSS) -- Tries of scroll smooth ******* */

// navlists.forEach(ele => {
//     ele.addEventListener('click', evt => {
//         ele.preventDefault();
//         const eleID = evt.target.attributes.href.value;
//         const toSecID = document.querySelector(eleID);
//         const secTop = toSecID.offsetTop;

//         // window.scrollTo({
//         //     top: secTop,
//         //     behavior: "smooth"
//         // })

//         toSecID.scrollIntoView({
//             behavoir: "smooth",
//         })
//     })
    
// });


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


