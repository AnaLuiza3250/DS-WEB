//criando o contador de itens
var contadorItem = 0;

function adicionar(){
    contadorItem ++ //incrementando o contador
    //crio o item
    let novoItem = document.createElement("li"); //criar um elemento html

    nome = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    registro = document.getElementById("registro").value;
    fone = document.getElementById("fone").value;
    serie = document.getElementById("serie").value;
    turma = document.getElementById("turma").value;


    novoItem.innerHTML = //Dá para usar tags de html desse jeito
        "<br><strong>Nome:</strong> " + nome + "<br>" +
        "<strong>Email:</strong> " + email + "<br>" +
        "<strong>Registro:</strong> " + registro + "<br>" +
        "<strong>Telefone:</strong> " + fone + "<br>" +
        "<strong>Série:</strong> " + serie + "<br>" + 
        "<strong>Turma:</strong> " + turma + "<br>";

    novoItem.setAttribute("id", contadorItem); //atribuo um ID

    let botaoRemover = document.createElement("button"); //botão de remover
    botaoRemover.textContent = "Remover";
    botaoRemover.setAttribute("onclick", "remover("+contadorItem+")")
    novoItem.appendChild(botaoRemover);

    document.getElementById("lista").appendChild(novoItem); //adiciona o item à lista
}

function remover(itemLista){
    var item = document.getElementById(itemLista);
    document.getElementById("lista").removeChild(item);
}