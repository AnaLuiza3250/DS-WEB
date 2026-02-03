//O PONTO E VÍRGULA É OPCIONAL

/*const prof = "Bruno" //não pode mudar de valor depois de declarada e atribuida
var nome = "Ana"
alert(nome)*/

/*let numero = Number("10")
console.log(numero) //coloca informações no console do navegador (F12)

var numero1 = 10
var numero2 = 50
console.log(numero1 + numero2)

var resposta = window.confirm("Deseja continuar?")  //usada para captar oq o usuário clicou
console.log(resposta) //pode ser usado assim: confirm("Deseja continuar?"), mas o valor não será armazenado

//Exemplo de confirmação

    let apagar = confirm("Tem certeza que deseja excluir?")
    if (apagar) {
        alert("Item apagado") //ou console.log()
    } else {                      // ou document.body
        alert("Ação cancelada")
    }
    

var nome = prompt("Digite seu nome")  // o valor é retornado como string, 
console.log(nome)                     // caso não digite nada, o valor fica como null


var numero1 = Number(prompt("Digite um número:"))
var numero2 = Number(prompt("Digite um número:"))
console.log(numero1 + numero2)
*/

let nome = prompt("Qual é o seu nome?")
if(nome == null){
    alert("Você cancelou.")
} else{
    alert("Olá, " + nome + "!")
}

document.body.INNER