document.getElementById("foto").setAttribute("src", "Foto de perfil.png");
document.getElementById("foto").style.width = "250px";

function mudaImagem1() {
    document.getElementById("foto").setAttribute("src", "todos.png");
}

function mudaImagem2() {
    document.getElementById("foto").setAttribute("src", "nojinho.webp");
}

function mudaImagem3() {
    document.getElementById("foto").setAttribute("src", "raiva.jpg");
}

function exibir() {
    let url = document.getElementById("foto").getAttribute("href");
    console.log(url);
}