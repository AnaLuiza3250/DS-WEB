//================================= Eventos de Mouse =================================

var area = document.getElementById("area");
var mensagem = document.getElementById("mensagem");

area.addEventListener("click", function () {
    mensagem.textContent = "Clique simples detectado!";
});

area.addEventListener("dblclick", function () {
    if (area.style.background === "lightgreen") {
        area.style.background = "linear-gradient(135deg, #4facfe, #43e97b)";
    } else {
        area.style.background = "lightgreen";
    }
});

area.addEventListener("mouseenter", function () {
    mensagem.textContent = "Mouse entrou na área!";
});

area.addEventListener("mouseleave", function () {
    mensagem.textContent = "Mouse saiu da área!";
});

var posicao = document.getElementById("posicao");
area.addEventListener("mousemove", function (event) {
    posicao.textContent = "X:" + event.clientX + " Y:" + event.clientY;
});

area.addEventListener("contextmenu", function (event) {  //substitui a função do clique direito 
    event.preventDefault();                              //do mouse pelo minha ação personalizada
    alert("Botão direito clicado!");
});

//================================= Eventos do Teclado ===============================

document.addEventListener("keydown", function (event) {
    // Exibe a tecla pressionada
    var campo = document.getElementById("resultado");
    campo.textContent = "Tecla pressionada: " + event.key;
    // Também mostra no console
    console.log("Tecla pressionada: " + event.key);
    
    if (event.key === " ") {
        campo.textContent = "Tecla Espaço pressionada!";
    }
});

document.addEventListener("keyup", function (event) {
    var campo2 = document.getElementById("resultado2");
    campo2.textContent = "Tecla liberada: " + event.key;
    console.log("Tecla liberada: " + event.key);

     if (event.key === " ") {
        campo2.textContent = "Tecla Espaço liberada!";
    }
});

document.addEventListener("keypress", function (event) {
    var campo3 = document.getElementById("resultado2");
    campo3.textContent = "Tecla pressionada (keypress): " + event.key;
    console.log("Tecla pressionada (keypress): " + event.key);

     if (event.key === " ") {
        campo3.textContent = "Tecla Espaço pressionada!";
    }
});


//================================= Eventos de Formulário ============================


//================================= Eventos de Janela ================================


//================================= VALIDÇÃO DE FORMULÁRIO ===========================

function myFunction() {
  let x = document.getElementById("idade").value;
  let text;
  if (isNaN(x)) { //isNaN() é uma função que verifica se o valor é um número ou não.
    text = "DIgite um número válido";
  } else {
    text = "Idade OK";
  }
  document.getElementById("demo").innerHTML = text;
}