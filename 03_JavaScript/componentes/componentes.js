function configurarEventos(){
    var itensNavegador = document.getElementsByClassName("item-navegador");

    for(var i=0; i<itensNavegador.length; i++){
        itensNavegador[i].addEventListener("click", clicarItemNavegador);
        itensNavegador[i].addEventListener("click", mostrarSecao);
    }

    var accordions = document.getElementsByClassName("accordion");

    for(var i=0; i<accordions.length; i++){
        accordions[i].addEventListener("click", mostrarPainel);
    }
}

function desativarItensNavegador(){
    var itensNavegador = document.getElementsByClassName("item-navegador");

    for(var i=0; i<itensNavegador.length; i++){
        itensNavegador[i].classList.remove("ativo");
    }
}

function clicarItemNavegador(){
    desativarItensNavegador();
    this.classList.add("ativo");
}

function esconderSecoes(){
    var secoes = document.getElementsByClassName("secao");
    for(var i=0; i<secoes.length; i++){
        secoes[i].style.display = "none";
    }
}

function mostrarSecao(){
    esconderSecoes();
    var idSecao = this.getAttribute("data-secao");
    var secao = document.getElementById(idSecao);
    secao.style.display = "block";
}

function mostrarPainel(){
    this.classList.toggle("ativo");
    var painel = this.nextElementSibling;
    
    if(painel.style.display == "block"){
        painel.style.display = "none";
    }else{
        painel.style.display = "block";
    }
}