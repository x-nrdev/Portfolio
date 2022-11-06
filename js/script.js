// Variables
const nav = document.getElementById('navbar');
const bgMenu = document.getElementById
('back__menu');
const lang = document.forms['form']['lang'];
const textsToChange = document.querySelectorAll("[data-section]");

// Nav hide menu
const navList = document.querySelectorAll('.nav__li');
console.log(navList.forEach (e => {
    e.addEventListener('click', hideMenu)
}));

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
    if (language === 'en') {
        location.href = "index-en.html"
    } else {
        location.href = "index.html"
    }
}

// Portfolio animation test.

let projects = document.querySelectorAll('.pf__container');
projects.forEach(p => {
    p.setAttribute('data-aos', 'flip-up')
    p.setAttribute('data-aos-delay', 400)
})

// AOS
let sec = 300;
AOS.init(
    {
        delay: sec,
        duration: 1000,
        once: true,
        mirror: true,
    }
);