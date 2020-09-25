function request(metodo, url, cFunction){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            cFunction(this);
        }
    };
    xhttp.open(metodo, url, true);
    xhttp.send();
}

function carregarInformacoes(){
    var url = "https://reqres.in/api/users";
    request("GET", url, responseCarregarInformacoes);
}

function responseCarregarInformacoes(xhttp){
    var response = JSON.parse(xhttp.responseText);

    document.getElementById("qtd-usuarios").innerHTML = response.total;

    document.getElementById("qtd-paginas").innerHTML = response.total_pages;

}

function carregarTabela(){
    var url = "https://reqres.in/api/users?page=1";
    request("GET", url, responseCarregarTabela);
}

function responseCarregarTabela(xhttp){
    var response = JSON.parse(xhttp.responseText)
    var usuarios = response.data;

    var tabela = document.getElementById("tabela-usuario");
    tabela.parentNode.style.display = "block";


    for(var i=0; i<usuarios.length; i++){
        var linha = document.createElement("tr");

        var nome = document.createElement("td");
        var nomeTexto = document.createTextNode(usuarios[i].first_name);
        nome.appendChild(nomeTexto);

        linha.appendChild(nome);

        tabela.appendChild(linha);
    }
}