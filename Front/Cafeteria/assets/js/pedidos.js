// Pega o ID da URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

var divResposta = document.getElementById("resposta")

var inputCliente   = document.getElementById("cliente")

document.addEventListener('DOMContentLoaded', getCategorias)
document.getElementById('botaoEnviar').addEventListener('click', postCategoria)

async function getCategorias() {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedidos")
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.cliente}</td>
            <td>${item.total}</td>
            <td>${item.criado_em}</td>
            <td><button onclick="deleteCategoria(${item.id})">Deletar</button><button onclick="pedir(${item.id})">Visualizar</button></td>
        </tr>
    `).join("");
    
    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="5" ><center>Pedidos em Aberto</center></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Total</th>
                    <th>Data</th>
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
    var requisicao = await fetch("http://localhost/cafeteria-api/pedidos", {
        method: "POST",
        body: JSON.stringify({cliente: inputCliente.value})
    })

    var resposta = await requisicao.json()
    console.log(resposta.value)
    
    //Limpa o campo
    inputCliente.value = ""

    getCategorias()
}


async function deleteCategoria(id) {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedidos/" + id, {
        method: "DELETE"
    })
 
    var resposta = await requisicao.json()
    console.log(resposta)
 
    getCategorias()
}

async function pedir(id){
    window.location.href = "pedidos.html?id=" + id;
}



// .data.map -> o DATA vem da API, a função MAP pega a array e para cada linha que ele encontrar de informação ele realiza 
// a ação pedida
// exemplo: numeros.map(valor => alert(valor));
// .join(""); coloca tudo que está dentro dos <tr>'s como uma informação só (uma variável), para poder exibir tudo de uma 
// vez na tela 