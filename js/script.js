// Variables
const nav = document.getElementById('nav');
const bgMenu = document.getElementById
('back__menu');
const lang = document.forms['form']['lang'];
const textsToChange = document.querySelectorAll("[data-section]");

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

    for (let i of textsToChange) {
        const section = i.dataset.section;
        const value = i.dataset.value;

        if (section !== 'header') {
            i.innerHTML = txt[section][value];
        } else if (language === 'en') {
            i.innerHTML = `
                Nelson Rojas
                <br>
                <span class="header__card__text-fe">
                    Frontend
                </span>
                <span class="header__card__text-dw" data-section="header" data-value="dev">
                    ${txt[section][value]}
                </span>
            `;
        } else {
            i.innerHTML = `
                Nelson Rojas
                <br>
                <span class="header__card__text-dw" data-section="header" data-value="dev">
                    ${txt[section][value]}
                </span>
                <span class="header__card__text-fe">
                    Frontend
                </span>
            `;
        }
    };
    // console.log (txt);
}