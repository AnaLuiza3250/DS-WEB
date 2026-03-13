<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Controle de Semáforo</title>
    <link rel="stylesheet" href="style.css">k
</head>
<body>
    
<button>Ligar Semáforo</button>

<input type="range" name="valor" min="0" max="100" value="<?php echo $valor; ?>">

<form method="post">
        <div class="scroll-container">
            <button type="button" onclick="alterarValor(-1)">-</button>
            <input type="number" id="valor" name="valor" value="<?php echo $valor; ?>" readonly>
            <button type="button" onclick="alterarValor(1)">+</button>
        </div>
        <br>
        <input type="submit" value="Enviar">
    </form>

</body>

<script src="controle.js"></script>

</html>