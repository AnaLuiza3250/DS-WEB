let confirmar = confirm("Vamos calcular?")
    if (confirmar) {

        var numero1 = Number(prompt("Adição. Digite o primeiro número:"))
        var numero2 = Number(prompt("Adição. Digite o segundo número:"))
        var valor1 = numero1 + numero2
        alert("Resultado: " + valor1)

        var numero3 = Number(prompt("Subtração. Digite o primeiro número:"))
        var numero4 = Number(prompt("Subtração. Digite o segundo número:"))
        var valor2 = numero3 - numero4
        alert("Resultado: " + valor2)

        var numero5 = Number(prompt("Multiplicação. Digite o primeiro número:"))
        var numero6 = Number(prompt("Multiplicação. Digite o segundo número:"))
        var valor3 = numero5 * numero6
        alert("Resultado: " + valor3)

        var numero7 = Number(prompt("Divisão. Digite o primeiro número:"))
        var numero8 = Number(prompt("Divisão. Digite o segundo número:"))
        var valor4 = numero7 / numero8
        alert("Resultado: " + valor4)

    } else {                      
        alert("Ação cancelada")
    }
