<?php

class Pessoa { //classe

    public $nome; //Atributo

    public function falar(){ //método
        return "O meu nome é " . $this->nome;
    }
}

$Ana = new Pessoa();
$Ana->nome = "Aninha";
echo $Ana->falar();

?>