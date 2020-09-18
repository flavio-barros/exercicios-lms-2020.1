var paragrafo2 = document.getElementById("p2");
paragrafo2.classList.add("texto-personalizado");

var paragrafo4 = document.getElementById("p4");
paragrafo4.classList.remove("texto-grande");

var paragrafos = document.getElementsByTagName("p");
for(var i=0; i<paragrafos.length; i++){
    if(paragrafos[i].classList.contains("texto-pequeno") == true){
        paragrafos[i].classList.add("texto-personalizado");
    }
}

for(var i=0; i<paragrafos.length; i++){
    paragrafos[i].classList.toggle("texto-personalizado");
}