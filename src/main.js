// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
import about from "./src/pages/cadastro.js";

const main = document.querySelector('#teste');
const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch(window.location.hash){
            case "#login":
                main.appendChild(login());
                break;
            case "#about":
                main.appendChild(about());
                break;
            case "#timeline":
                main.appendChild(timeline());
                break;
            default:
                main.appendChild(about());

        }
    }
}
window.addEventListener("load", () => {
  main.appendChild(about());
})