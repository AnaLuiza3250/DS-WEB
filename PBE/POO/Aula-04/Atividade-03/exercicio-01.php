<?php

class Dono {
    public $nome;
    public $telefone;

    public function __construct ($nome, $telefone){
        $this->nome = $nome;
        $this->telefone = $telefone;
    }
}

class Animal {
    public $nome;
    public $especie;
    public Dono $dono;

    public function __construct ($nome, $especie, Dono $dono){
        $this->nome = $nome;
        $this->especie = $especie;
        $this->dono = $dono;
    }
}

$dono = new Dono("João", "(11) 99999-9999");
$animal = new Animal("Rex", "Cachorro", $dono);

echo $animal->nome . " | " . $animal->especie . "<br>";
echo "Dono: " . $animal->dono->nome . " | Tel: " . $animal->dono->telefone;
?>
