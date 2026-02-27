var foto = document.getElementById("foto");
var mensagem = document.getElementById("mensagem");

foto.addEventListener("click", function () {
    foto.setAttribute("src", "download.jpg");
    mensagem.textContent = "Clicou na foto, mesmo sabendo que não podia clicar nela!(Clique novamente, te desafio!";

    if (foto.src.includes("download.jpg")) {
        mensagem.textContent = "Me diga seu nome! (Digite e clique o botão direito do mouse)";
    }
});


var saida = document.getElementById("resultado");
var texto = "";
document.addEventListener("keydown", function (event) {
    // Ignora algumas teclas especiais
    if (event.key.length === 1) {
    texto += event.key;}
    saida.textContent = texto;
});

foto.addEventListener("contextmenu", function (event) {  //substitui a função do clique direito do mouse pelo minha ação personalizada
    event.preventDefault();                              
    let teimoso = prompt("Você é uma pessoa muito teimosa não é? Sim ou Não?");
    if(teimoso == "Sim" || teimoso == "sim"){
        alert("Eu sabia que você era teimoso, " + texto + "!");
    } else if(teimoso == "Não" || teimoso == "não" || teimoso == "Nao" || teimoso == "nao"){
        alert("Pare de mentir para si mesmo, " + texto + "!");
    } else {
        alert("Não sabe nem mesmo responder uma pergunta simples " + texto + "! Melhore!");
    }
});

var area = document.getElementById("area");
area.addEventListener("mouseenter", function () {
    document.getElementById("quadrado").style.backgroundColor = "red";

    mensagem.textContent = "NÃO CLIQUE!";

    if (foto.src.includes("download.jpg")) {
        mensagem.textContent = "Clicou na foto, mesmo sabendo que não podia clicar nela!";
    }
});

area.addEventListener("mouseleave", function () {
    document.getElementById("quadrado").style.backgroundColor = "rgb(29, 181, 21)";
});

area.addEventListener("mouseleave", function () {
    mensagem.textContent = " ";

    if (foto.src.includes("download.jpg")) {
        mensagem.textContent = "Clicou na foto, mesmo sabendo que não podia clicar nela!";
    }
});

var quadrado = document.getElementById("quadrado");
var x = 0, y = 0;
document.addEventListener("mousemove", function(event) {
    y = event.clientY;
    x = event.clientX;
});
setInterval(function () {
    quadrado.style.top = y + "px";
    quadrado.style.left = x + "px";
}, 60);

