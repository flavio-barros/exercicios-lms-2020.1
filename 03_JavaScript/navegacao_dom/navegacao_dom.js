// Navegação no HTML DOM
var pai = document.getElementById("conteudo");

var primeiroFilho = pai.firstElementChild;
primeiroFilho.style.backgroundColor = "red";

var ultimoFilho = primeiroFilho.nextElementSibling;
ultimoFilho.style.setProperty("height", "300px");

// primeiroFilho.parentNode.style.backgroundColor = "green";

// Criação de elemento no HTML DOM

var paragrafo = document.createElement("p");
var texto = document.createTextNode("Parágrafo via JS");
paragrafo.appendChild(texto);

var div2 = document.getElementById("ex2");
// div2.appendChild(paragrafo);
var p5 = document.getElementById("p5");
div2.insertBefore(paragrafo, p5);

// Remoção de elemento do HTML DOM

var p2 = document.getElementById("p2");
// p2.remove();

var cab1 = document.getElementById("cab1");
var div1 = document.getElementById("ex1");
// div1.removeChild(cab1);

// Substuição de elementos no HTML DOM 

var novoCabecalho = document.createElement("h1");
var texto1 = document.createTextNode("Novo Cabeçalho JS");
novoCabecalho.appendChild(texto1);

var noPai = document.getElementById("ex1");
var noFilho = noPai.firstElementChild;
noPai.replaceChild(novoCabecalho, noFilho);

// Manipulando HTMLCollection

var paragrafos = document.getElementsByTagName("p");

for(i=0; i < paragrafos.length; i++){
    paragrafos[i].style.fontSize = "30px";
}

paragrafos["p3"].style.color = "blue";








