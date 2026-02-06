document.getElementById("caixa").style.backgroundColor = "white";
document.getElementById("caixa").style.height = "350px";
document.getElementById("caixa").style.fontSize = "150px";
document.getElementById("caixa").style.color = "black";


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