let confirmar = confirm("Vamos calcular o seu montante??")
    if (confirmar) {

        var c = Number(prompt("Informe seu valor capital: "))
        var i = Number(prompt("Informe sua taxa de juros: "))
        var t = Number(prompt("Informe sem tempo de investimento, em meses: "))
        var ju = i / 100
        var m = c * ((1 + ju) ** t) 

        alert("Seu montante é de: " + "R$" + m.toFixed(2))

    } else {                      
        alert("Ação cancelada")
    }
