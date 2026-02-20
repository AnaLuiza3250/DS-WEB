var foto = document.getElementById("foto");
var mensagem = document.getElementById("mensagem");

foto.addEventListener("click", function () {
    foto.setAttribute("src", "download.jpg");
    mensagem.textContent = "Clicou na foto, mesmo sabendo que não podia clicar nela!(Clique novamente, te desafio!";

    if (foto.src.includes("download.jpg")) {
        mensagem.textContent = "Me diga seu nome! (Clique o botão direito do mouse)";
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

foto.addEventListener("contextmenu", function (event) {  //substitui a função do clique direito 
    event.preventDefault();                              //do mouse pelo minha ação personalizada
    alert("Você é uma pessoa teimosa " + texto + "!");
});

var area = document.getElementById("area");
area.addEventListener("mouseenter", function () {
    mensagem.textContent = "NÃO CLIQUE!";

    if (foto.src.includes("download.jpg")) {
        mensagem.textContent = "Clicou na foto, mesmo sabendo que não podia clicar nela!";
    }
});

area.addEventListener("mouseleave", function () {
    mensagem.textContent = " ";

    if (foto.src.includes("download.jpg")) {
        mensagem.textContent = "Clicou na foto, mesmo sabendo que não podia clicar nela!";
    }
});

