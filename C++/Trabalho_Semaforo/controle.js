function enviarParaPHP(letra) {
    const dados = new FormData();
    dados.append('nivel', letra); // 'nivel' é a etiqueta que o PHP vai ler

    fetch('modo.php', {method: 'POST', body: dados})
    .then(res => res.text())
    .then(resposta => console.log("Servidor diz: " + resposta));
}

//--------------------------------------------------------SEMÁFORO-------------------------------------------------------------   

const delay = ms => new Promise(res => setTimeout(res, ms));

var pare = document.querySelectorAll(".pare");
var espere = document.querySelectorAll(".espere");
var vai = document.querySelectorAll(".vai");
var rodopio = false;
var rodopio2 = false;
var rodopio3 = false;


function ModoMedio(){
    enviarParaPHP('M');
    if (rodopio) return;
    if (rodopio2) return;
    if (rodopio3) return;
    rodopio = true;
    iniciarCiclo();
    console.log("modo médio ativado");
}
function ModoBaixo(){
    enviarParaPHP('B');
    if (rodopio2) return;
    if (rodopio) return;
    if (rodopio3) return;
    rodopio2 = true;
    iniciarCiclo();
    console.log("modo lento ativado");
}
function ModoAlto(){
    enviarParaPHP('A');
    if (rodopio3) return;
    if (rodopio2) return;
    if (rodopio) return;
    rodopio3 = true
    iniciarCiclo();
    console.log("modo rápido ativado");
}
function parar(){   
    rodopio = false;
    rodopio2= false;
    rodopio3= false;
    pare[0].classList.remove("vermelho");
    pare[0].classList.add("cinza");
    vai[0].classList.remove("verde");
    vai[0].classList.add("cinza");
    espere[0].classList.remove("amarelo");
    espere[0].classList.add("cinza");
    console.log("parou");


}
async function iniciarCiclo(){
    while(rodopio == true){
            vai[0].classList.remove("cinza");
            vai[0].classList.add("verde")
        //verde para amarelo
            await delay(15000)//15 segundos
            if (rodopio == false) break;
            vai[0].classList.remove("verde");
            vai[0].classList.add("cinza");
            espere[0].classList.remove("cinza");
            espere[0].classList.add("amarelo");
        //amarelo para vermelho
            await delay(4000)//4 segundos
            if (rodopio == false) break;
            espere[0].classList.remove("amarelo");
            espere[0].classList.add("cinza");
        //vermelho para o verde
            pare[0].classList.remove("cinza");
            pare[0].classList.add("vermelho");
            await delay(15000)//15 segundos
            if (rodopio == false) break;
            pare[0].classList.remove("vermelho");
            pare[0].classList.add("cinza");
            
    }
    while (rodopio2 == true){
            vai[0].classList.remove("cinza");
            vai[0].classList.add("verde")
        //verde para amarelo
            await delay(20000)//20 segundos
            if (rodopio2 == false) break;
            vai[0].classList.remove("verde");
            vai[0].classList.add("cinza");
            espere[0].classList.remove("cinza");
            espere[0].classList.add("amarelo");
        //amarelo para vermelho
            await delay(5000)//5 segundos
            if (rodopio2 == false) break;
            espere[0].classList.remove("amarelo");
            espere[0].classList.add("cinza");
            //vermelho para o verde
            pare[0].classList.remove("cinza");
            pare[0].classList.add("vermelho");
            await delay(20000)//20 segundos
            if (rodopio2 == false) break;
            pare[0].classList.remove("vermelho");
            pare[0].classList.add("cinza");
            
        
    }
        while (rodopio3 == true){
            vai[0].classList.remove("cinza");
            vai[0].classList.add("verde")
            //verde para amarelo
            await delay(10000)//10 segundos
            if (rodopio3 == false) break;
            vai[0].classList.remove("verde");
            vai[0].classList.add("cinza");
            espere[0].classList.remove("cinza");
            espere[0].classList.add("amarelo");
        //amarelo para vermelho
            await delay(3000)//3 segundos
            if (rodopio3 == false) break;
            espere[0].classList.remove("amarelo");
            espere[0].classList.add("cinza");
            //vermelho para o verde
            pare[0].classList.remove("cinza");
            pare[0].classList.add("vermelho");
            await delay(10000)//10 segundos
            if (rodopio3 == false) break;
            pare[0].classList.remove("vermelho");
            pare[0].classList.add("cinza");
    }
}

