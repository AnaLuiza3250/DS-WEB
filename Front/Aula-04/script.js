//criando o contador de itens
var contadorItem = 0;

function adicionar(){
    contadorItem ++ //incrementando o contador
    //crio o item
    let novoItem = document.createElement("li"); //criar um elemento html
    let novaTarefa = document.getElementById("novaTarefa").value

    novoItem.textContent = contadorItem + " - " + novaTarefa; //adiciono texto ao meu item
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