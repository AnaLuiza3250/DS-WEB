<?php

require "semaforo.php";

if (isset($_POST['nivel'])) {
    $nivel = $_POST['nivel'];
    
    $semaforo = new Semaforo("COM6");

    if ($nivel == 'B') {
        $semaforo->B();
        echo "Deu certo baixo";
    } 
    elseif ($nivel == 'M') {
        $semaforo->M();
        echo "Deu certo médio";
    }
    elseif ($nivel == 'A') {
        $semaforo->A();
        echo "Deu certo alto";
    }
}
?>