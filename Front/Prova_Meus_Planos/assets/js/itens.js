//==================================================categorias===================================================================

async function carregarCategorias() {
    try {
        const resposta = await fetch("http://localhost/meus_planos/categorias");
        const resultado = await resposta.json();

        const select = document.getElementById("categoria");
        select.innerHTML = ""; // limpa antes de preencher

        resultado.data.forEach(categoria => {
            select.innerHTML += `
                <option value="${categoria.id}">
                    ${categoria.nome}
                </option>
            `;
        });
    } catch (error) {
        console.error("Erro ao carregar categorias:", error);
    }
}

carregarCategorias();

//==================================================Funções===================================================================

var divResposta = document.getElementById("resposta")

var inputMeta   = document.getElementById("meta")
var categoria = document.getElementById("categoria")

document.addEventListener('DOMContentLoaded', getCategorias)
document.getElementById('botaoEnviar').addEventListener('click', postCategoria)


async function getCategorias() {
    var requisicao = await fetch("http://localhost/meus_planos/itens")
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td><input type="checkbox"${item.feito == 1 ? "checked" : ""} onchange="alterarStatus(${item.id}, this)"></td>
            <td class="${item.feito == 1 ? 'feito' : ''}">${item.nome}</td>
            <td>${item.categoria_nome}</td>
            <td><button onclick="deleteCategoria(${item.id})">Deletar</button></td>
        </tr>
    `).join("");
    
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="4" ><center>Categorias Cadastradas</center></th>
                </tr>
                <tr>
                    <th>Status</th>
                    <th>Meta</th>
                    <th>Categoria</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;
}



async function postCategoria() {
    var requisicao = await fetch("http://localhost/meus_planos/itens", {
        method:  "POST",
        body: JSON.stringify({ 
            nome: inputMeta.value,
            categoria: categoria.value
        })
    });

    var resposta = await requisicao.json()
    console.log(resposta)
    
    //Limpa o campo
    inputMeta.value = ""

    getCategorias()
}


async function deleteCategoria(id) {
    var requisicao = await fetch("http://localhost/meus_planos/itens/" + id, {
        method: "DELETE"
    })
 
    var resposta = await requisicao.json()
    console.log(resposta)
 
    getCategorias()
}

//status da meta===========================================================================================================
function alterarStatus(id, checkbox) {
    const novoStatus = checkbox.checked ? 1 : 0;

    // Atualiza no banco
    fetch("http://localhost/meus_planos/itens/" + id, {
        method: "PUT",
        body: JSON.stringify({ id: id, feito: novoStatus })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

    // Atualiza a cor na tela imediatamente

    const linha = checkbox.closest("tr"); // pega a linha da tabela
    /*checkbox → é o elemento <input type="checkbox"> que você clicou.
    .closest("tr") → é um método nativo do JavaScript que procura o ancestral mais próximo (pai, avô, etc.) do elemento que corresponda ao seletor CSS informado.
    No caso, "tr" → significa que ele vai subir na árvore do DOM até encontrar a linha da tabela (<tr>) que contém esse checkbox.*/    

    const metaCelula = linha.querySelector("td:nth-child(2)"); // segunda coluna (Meta)
    /*linha → é a referência para a <tr> (linha da tabela) que eu peguei antes com checkbox.closest("tr").
    .querySelector("td:nth-child(2)") → procura dentro dessa linha o elemento que corresponde ao seletor CSS informado.
    td → significa que estou procurando uma célula da tabela.
    :nth-child(2) → significa “o segundo filho” dentro da linha, ou seja, a segunda coluna.*/ 

    metaCelula.classList.toggle("feito", novoStatus === 1);
    /*metaCelula.classList → é a lista de classes CSS aplicadas ao elemento da célula da tabela (a coluna "Meta").
    .toggle("feito", condição) → adiciona ou remove a classe "feito" dependendo da condição:
    novoStatus === 1 → é a condição.
    Se o checkbox está marcado, novoStatus vale 1 → condição true → adiciona a classe "feito".
    Se está desmarcado, novoStatus vale 0 → condição false → remove a classe "feito". */

}
