<?php

class Pessoa {
    public $nome = "Rasmus";
    protected $idade = 48;
    private $senha = "12345";

    function verDados(){
        echo $this->nome . "<br/>";
        echo $this->idade . "<br/>";
        echo $this->senha . "<br/>";
    }
}

$bruno = new Pessoa();
//echo $objeto->nome . "<br/>";
$bruno->verDados();

class Programador extends Pessoa {

    public function verDados(){
        //Exibe a Classe atual
        echo get_class($this) . "<br/>";
        echo $this->nome . "<br/>";
        echo $this->idade . "<br/>";
        echo $this->senha . "<br/>";
    }
}

$objeto = new Programador();
//echo $objeto->nome . "<br/>";
$objeto->verDados(); //não aparece a senha, pois é privada da classe Pai

?>