<?php
class Pessoa {

    public function saudacao(){
        echo "Olá";
    }

}

class Estudante extends Pessoa {

    public function saudacao() {
        echo "Olá, professor!";
    }

}
?>