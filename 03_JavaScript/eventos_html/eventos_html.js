function redefinirCores(){
    var cartoes = document.getElementsByClassName("card");
    for(var i=0; i<cartoes.length; i++){
        cartoes[i].style.backgroundColor = "white";
    }
}

function configurarEventos(){
    var cartoes = document.getElementsByClassName("card");
    for(var i=0; i<cartoes.length; i++){
        cartoes[i].addEventListener("click", handleClickCard);
        cartoes[i].addEventListener("mouseover", handleMouseoverCard);
        cartoes[i].addEventListener("mouseout", handleMouseoutCard);
        cartoes[i].addEventListener("mousedown", handleMousedownCard);
        cartoes[i].addEventListener("mouseup", handleMouseupCard);
    }
}

function handleClickCard(){
    this.style.backgroundColor = "red";
}

function handleMouseoverCard(){
    this.style.opacity = "40%";
}

function handleMouseoutCard(){
    this.style.opacity = "100%";
}

function handleMousedownCard(){
    this.style.backgroundColor = "blue";
    this.style.opacity = "100%";
}

function handleMouseupCard(){
    this.style.opacity = "40%";
}