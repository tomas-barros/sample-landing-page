const menuIcon = document.getElementById('menuSwitch');
const linksArea = document.getElementsByClassName('links')[0];
const iconFA = document.getElementById('iconFA');
var menuOpen = false;

function switchMenu() {
    if (menuOpen) {
        menuOpen = false;
        linksArea.style.display = 'none';
        iconFA.classList.remove('fa-times');
    } else {
        menuOpen = true;
        linksArea.style.display = 'block';
        iconFA.classList.add('fa-times');
    }
}

menuIcon.addEventListener('click', switchMenu);

switchMenu();