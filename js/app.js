/* GLOBAL VARIABLES */

const listOfSections = document.querySelectorAll('section'); 
const navbarList = document.querySelector('#navbar__list');

/* HELPER FUNCTIONS */

//creates a ListItem for Navigation
const createLink = (section) => {
    const linkName = section.getAttribute('data-nav');
    const link = section.getAttribute('id');
    const navElement = document.createElement('li');
    navElement.innerHTML = `<a href="#${link}">${linkName}</a>`;
    navElement.setAttribute('class', 'menu__link');

    return navElement;
}

const evaluatePosition = (section) => {
    const position = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (position.top < windowHeight*0.5 && position.bottom > windowHeight*0.5) {
        section.className = "your-active-class";
    } else {
        section.className = "";
    }    
}

/* MAIN FUNCTIONS */

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


// Scroll to anchor ID using scrollTO event
    // addEventListener('click',....) 
    // preventDefault() 
    // scroll(), scrollBy(), and scrollIntoView() 

