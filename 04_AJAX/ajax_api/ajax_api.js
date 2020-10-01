function request(metodo, url, cFunction, status){
    if(status == undefined){
        status = 200;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == status){
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

function carregarTabela(elemento){
    var pagina = elemento.getAttribute("data-pagina");

    var url = "https://reqres.in/api/users?page="+pagina;
    request("GET", url, responseCarregarTabela);
}

function criarElementoTexto(tag, texto){
    var elemento = document.createElement(tag);
    var noTexto = document.createTextNode(texto);
    elemento.appendChild(noTexto);

    return elemento;
}

function removerElementosPorClasse(classe){
    var elementos = document.getElementsByClassName(classe);
    for(var i=elementos.length-1; i>=0; i--){
        elementos[i].remove();
    }
}

function criarBotoesNavegacao(qtdPaginas){
    var tabela = document.getElementById("tabela-usuario");
    var paiTabela = tabela.parentNode;

    removerElementosPorClasse("botao-navegacao");
    for(var i=0; i<qtdPaginas; i++){
        var botao = criarElementoTexto("button", "Página "+(i+1));
        botao.classList.add("botao-navegacao");
        botao.setAttribute("data-pagina", i+1);
        botao.addEventListener("click", function(){
            carregarTabela(this);
        });
        paiTabela.insertBefore(botao, tabela);
    }
}

function responseCarregarTabela(xhttp){
    var response = JSON.parse(xhttp.responseText)
    var usuarios = response.data;

    var tabela = document.getElementById("tabela-usuario");
    tabela.parentNode.style.display = "block";

    criarBotoesNavegacao(response.total_pages);
    removerElementosPorClasse("registro-usuario");

    for(var i=0; i<usuarios.length; i++){
        var linha = document.createElement("tr");

        var primeiroNome = criarElementoTexto("td", usuarios[i].first_name);
        var ultimoNome = criarElementoTexto("td", usuarios[i].last_name);
        var email = criarElementoTexto("td", usuarios[i].email);
        var botaoExcluir = criarElementoTexto("button", "Excluir");
        botaoExcluir.addEventListener("click", function(){
            excluirUsuario(this);
        })

        linha.appendChild(primeiroNome);
        linha.appendChild(ultimoNome);
        linha.appendChild(email);
        linha.appendChild(botaoExcluir);
        linha.classList.add("registro-usuario");
        linha.setAttribute("data-id-usuario", usuarios[i].id);

        tabela.appendChild(linha);
    }
}

function excluirUsuario(elemento){
    var id = elemento.parentNode.getAttribute("data-id-usuario");

    var url = "https://reqres.in/api/users/"+id;
    request("DELETE", url, responseExcluirUsuario, 204);
}

function responseExcluirUsuario(){
    alert("Usuário excluído");
}