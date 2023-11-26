const sideNavLinks = document.querySelectorAll('.side-bar-link');
const currentPath = location.href;
const sideNavLength = sideNavLinks.length;

const openMenuButton = document.getElementById('menuOpenNavButton');
const closeMenuButton = document.getElementById('menuCloseNavButton');
const menuSection = document.getElementById('menuNavSection');

openMenuButton.addEventListener('click', () =>{
menuSection.classList.remove('hide')
})

closeMenuButton.addEventListener('click', () =>{
    menuSection.classList.add('hide')
    })


for(let i = 0; i < sideNavLength; i++){
    if(sideNavLinks[i].href == currentPath){
        sideNavLinks[i].classList.add('.side-bar-active');
    }
}