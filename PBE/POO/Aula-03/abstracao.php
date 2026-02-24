<?php

abstract class Animal {
    public function fazerSom(){
        echo "Gritaaaaar!";
    }
}

class Cachorro extends Animal {
    public function fazerSom() {
        echo "Au Au!";
}
}

//A CLASSE ABSTRATA NÃO PODE SER INSTANCIADA, SÓ DA PARA HERDAR, 
//POR ISSO NÃO VAI FUNCIONAR.

$cachorro = new Cachorro();
$cachorro->fazerSom();
?>