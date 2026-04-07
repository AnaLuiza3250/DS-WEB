
var divResposta = document.getElementById("resposta")

// os inputs var inputNome   = document.getElementById("nome")

document.addEventListener('DOMContentLoaded', getProdutos)
document.getElementById('botaoEnviar').addEventListener('click', postProduto)

async function getProdutos() {
    var produtos = await fetch('http://localhost/cafeteria-api/produtos')
    var resultado = await produtos.json()
    console.log(resultado)

    const linhas = resultado.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.preco}</td>
            <td>${item.categoria_id}</td>
            <td><button onclick="deleteProduto(${item.id})">Deletar</button></td>
        </tr>
    `).join("");
    
    console.log(resultado)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="5" ><center>Produtos Cadastrados</center></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
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

async function postProduto() {
    const resposta = await fetch("http://localhost/cafeteria-api/produtos", {
        method: "POST",
        body: JSON.stringify({
            nome: document.getElementById("nome").value,
            preco: document.getElementById("preco").value,
            categoria_id: document.getElementById("categoria").value,
    })
    });

    const resultado = await resposta.json();
    console.log(resultado.message);

    getProdutos();
}

async function deleteProduto(id) {
    if (confirm("Tem certeza que deseja deletar este produto?")) {
        const resposta = await fetch("http://localhost/cafeteria-api/produtos/" + id, {
            method: "DELETE"
        });

        const resultado = await resposta.json();
        alert(resultado.message);
        getProdutos();
    }
}

async function carregarCategorias() {
    try {
        const resposta = await fetch("http://localhost/cafeteria-api/categorias");
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