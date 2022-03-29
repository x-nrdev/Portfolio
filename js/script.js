// Variables
const nav = document.getElementById('nav');
const bgMenu = document.getElementById
('back__menu');
const lang = document.forms['form']['lang'];

// Event on bar click
document.getElementById('btn__menu').addEventListener('click', showMenu);
document.getElementById('back__menu').addEventListener('click', hideMenu);

// Events of language
lang.addEventListener('change', (e) => {
    changeLanguage(e.target.value);
})

// Functions
function showMenu () {
    nav.style.right = "0";
    bgMenu.style.left = "0";
}

function hideMenu () {
    nav.style.right = "-50%"
    bgMenu.style.left = "-100%";
}

async function changeLanguage (language) {
    const requestJson = await fetch(`../languages/${language}.json`);
    const txt = await requestJson.json();

    console.log (txt);
}