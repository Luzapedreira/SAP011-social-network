// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import register from './pages/register/register';

const main = document.querySelector('#teste');

const init = () => {
    window.addEventListener("hashchange", () => {

        main.innerHTML = "";
        switch (window.location.hash) {
            case "#login":
                main.appendChild(login());
                break;
            case "register":
                main.appendChild(register());
                break;
            case "#timeline":
                main.appendChild(timeline());
                break;
            default:
                main.appendChild(register());

        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(about());
    init();
