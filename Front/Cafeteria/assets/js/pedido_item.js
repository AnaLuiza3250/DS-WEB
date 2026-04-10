
var divResposta = document.getElementById("resposta")

var inputNome   = document.getElementById("nome")

// Pega o parâmetro "id" da URL
const params = new URLSearchParams(window.location.search);
const pedidoId = params.get("id"); // aqui vai ser "1" se a URL for pedidos.html?id=1

document.addEventListener('DOMContentLoaded', getCategorias)
document.getElementById('botaoEnviar').addEventListener('click', postCategoria)

async function getCategorias() {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedido_item")
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.pedido_id}</td>
            <td>${item.produto_id}</td>
            <td>${item.nome}</td>
            <td>${item.quantidade}</td>
            <td>${item.preco}</td>
            <td>${item.quantidade * item.preco}</td>
            <td><button onclick="deleteCategoria(${item.id})" >Deletar</button></td>
        </tr>
    `).join("");
    
    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="8" ><center>Pedidos em Aberto</center></th>
                </tr>
                <tr>
                    <th>ID Pedido</th>
                    <th>ID Cliente</th>
                    <th>ID Produto</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço (Unid.)</th>
                    <th>Total</th>
                    <th>Remover</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;

    // Calcula o total geral
    totalGeral = resposta.data.reduce((soma, item) => soma + (item.quantidade * item.preco), 0);

    // Atualiza a div fora da tabela
    document.getElementById("total").innerHTML = `
        <h3>Total Geral dos Pedidos: R$ ${totalGeral.toFixed(2)}</h3>
    `;

}



async function postCategoria() {
    const produtoId = document.getElementById("categoria").value;
    const quantidade = document.getElementById("quantidade").value;

    const requisicao = await fetch("http://localhost/cafeteria-api/pedido_item", {
        method: "POST",
        body: JSON.stringify({
            pedido_id: pedidoId,   // vem da URL
            produto_id: produtoId, // vem do select
            quantidade: quantidade // vem do input
        })
    });

    const resposta = await requisicao.json();
    console.log(resposta);

    // Limpa os campos
    document.getElementById("quantidade").value = "";

    //ADICIONAR O TOTAL
    const mandar = await fetch("http://localhost/cafeteria-api/pedido_item", {
    method: "POST",
    body: JSON.stringify({
        pedido_id: pedidoId,
        total: totalGeral
        })
    });
    
    const resp = await mandar.json();
    console.log(resp);


    getCategorias()
}


async function deleteCategoria(id) {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedido_item/" + id, {
        method: "DELETE"
    })
 
    var resposta = await requisicao.json()
    console.log(resposta)
 
    getCategorias()
}

async function carregarCategorias() {
    try {
        const resposta = await fetch("http://localhost/cafeteria-api/produtos");
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




// .data.map -> o DATA vem da API, a função MAP pega a array e para cada linha que ele encontrar de informação ele realiza 
// a ação pedida
// exemplo: numeros.map(valor => alert(valor));
// .join(""); coloca tudo que está dentro dos <tr>'s como uma informação só (uma variável), para poder exibir tudo de uma 
// vez na tela 