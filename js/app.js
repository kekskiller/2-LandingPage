/* ----- GLOBAL VARIABLES ----- */

const listOfSections = document.querySelectorAll('section'); 
const navbarList = document.querySelector('#navbar__list');

/* ----- HELPER FUNCTIONS ----- */
//creates a ListItem for Navigation
const createLink = (section) => {
    const navName = section.getAttribute('id');
    const linkName = section.getAttribute('data-nav');
    const navElement = document.createElement('li');
    navElement.innerHTML = `${linkName}`;
    navElement.setAttribute('class', 'menu__link');
    navElement.setAttribute('data-nav', navName)
    return navElement;
}

//evaluates position and sets className regarding
const evaluatePosition = (section) => {
    const position = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (position.top < windowHeight*0.5 && position.bottom > windowHeight*0.5) {
        section.className = "active";
    } else {
        section.className = "";
    }    
}

/* ----- MAIN FUNCTIONS ----- */
// Builds Navigation Bar
const builtNavigation = () => {
    for (let i = 0; i < listOfSections.length; i++) {
        const section = listOfSections[i];        
        navbarList.appendChild(createLink(section))
      }
}
builtNavigation()

// Checks for Position and hieghlihgts active Section
const highlight = () => {
for (let i = 0; i < listOfSections.length; i++) {
    const section = listOfSections[i];        
    evaluatePosition(section)  
  }
}
highlight();  
document.addEventListener("scroll", highlight);

// Smooth scrolling
const handleClick = (e) => {
    e.preventDefault()
    const nav = e.target.dataset.nav; 
    document.getElementById(nav).scrollIntoView({behavior:'smooth'})
}

const navigation = () => {
    const navItems = document.querySelectorAll('.menu__link');
    for (let i = 0; i < navItems.length; i++) {
        const navLink = navItems[i];
        navLink.addEventListener('click', handleClick);
    }
}

navigation ();
