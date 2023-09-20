// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

loadContent(){ 
    let contentDiv = document.getElementById("app"); 
    contentDiv.innerHTML = localização.hash; 
  } 
  
  window.addEventListener("hashchange", function (){ 
    loadContent(); 
  }); 
  
  carregarConteúdo();