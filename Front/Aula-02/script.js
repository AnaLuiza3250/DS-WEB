function somarNumeros(num1, num2){
    return num1 + num2;
}

let resultado = somarNumeros(5, 16)
console.log(resultado)

//======================================================================================================

//tarbalhando com data e hora

let dataAtual = new Date() //função nativa      Date() <- Classe nativa
console.log(dataAtual.toISOString())

let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();

console.log(`${dia}/${mes}/${ano}  ${hora}:${minuto}:${segundo}`);

//declara variavel de nova data
let hoje = new Date(); //se não passa data, pega o dia de hoje
let diasParaAdicionar = 7;

//cria uma nova data a partir da data atual
let novaData = new Date(hoje);
novaData.setDate(novaData.getDate() + diasParaAdicionar);  //dia
novaData.setMonth(novaData.getMonth() + diasParaAdicionar); //mes
novaData.setFullYear(novaData.getFullYear() + diasParaAdicionar); //ano

//show the new date
console.log(novaData.toLocaleDateString());

let data1 = new Date("2026-02-06")
let data2 = new Date("2026-04-12")

let diferencaMs = data2 - data1

let diferencaDias = diferencaMs / (1000 * 60 * 60 * 24)
console.log(`Diferença ${diferencaDias} dias`)

//=========================================================================================

//MANIPOLANDO O DOM

document.getElementById("conteudo").innerHTML = "<p>Olá, mundo!</p>";
//document.getElementById("conteudo").innerHTML += "<p>Olá, mundo!</p>"; o "+=" pega oq ja tem e adicona oq eu escrever depois

var valor = document.getElementById("conteudo").innerHTML; //dessa forma ele só recupera oq está na div, mostra 
console.log(valor);

//usando o setAtribute e getElementById
document.getElementById("foto").setAttribute("src", "Foto de perfil.png");
//mudar tamanho da foto
document.getElementById("foto").style.width = "150px";

let url = document.getElementById("link").getAttribute("href");
console.log(url); // "https://example.com"

document.getElementById("caixa").style.backgroundColor = "white";
document.getElementById("caixa").style.height = "350px";
document.getElementById("caixa").style.fontSize = "150px";
document.getElementById("caixa").style.color = "black";

/*function mudaTamanho() {
    document.getElementById("caixa").style.backgroundColor = "black";
    document.getElementById("caixa").style.color = "white";
    document.getElementById("corpo").style.backgroundColor = "black";
}

document.getElementById("botao").style.backgroundColor = "green";
document.getElementById("botao").style.color = "white";*/




let alternar = false;

function mudaTamanho() {
      let caixa = document.getElementById("caixa");
       
      if (alternar) {
        // ação do segundo clique
        caixa.innerHTML = "Eu sou a Ana";
        caixa.style.backgroundColor = "white";
        caixa.style.height = "350px";
        caixa.style.fontSize = "150px";
        caixa.style.color = "black";
        let valor = caixa.innerHTML;
        console.log(valor + " - Dia");
        
      } else {
        // ação do primeiro clique
        caixa.innerHTML = "Eu sou a Ana";
        caixa.style.backgroundColor = "black";
        caixa.style.color = "white";
        caixa.style.backgroundColor = "black";
        let valor = caixa.innerHTML;
        console.log(valor + " - Noite");
      }

       // alterna o estado para o próximo clique
      alternar = !alternar;
    }