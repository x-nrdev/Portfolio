// Variables
nav = document.getElementById('nav');
bgMenu = document.getElementById('back__menu');

// Event on bar click
document.getElementById('btn__menu').addEventListener('click', showMenu);
document.getElementById('back__menu').addEventListener('click', hideMenu);

// Functions
function showMenu () {
    nav.style.right = "0";
    bgMenu.style.left = "0";
}

function hideMenu () {
    nav.style.right = "-50%"
    bgMenu.style.left = "-100%";
}