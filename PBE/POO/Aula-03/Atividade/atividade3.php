<?php

class Veiculo {
    public $marca;
    public $modelo;
    private $velocidade;

    public function getMarca (){
        return $this->marca;
    }

    public function setMarca ($marca){
        $this->marca = $marca;
    }

    public function getModelo (){
        return $this->modelo;
    }

    public function setModelo ($modelo){
        $this->modelo = $modelo;
    }

    public function getVelocidade (){
        return $this->velocidade;
    }

    public function setVelocidade ($velocidade){
        $this->velocidade = $velocidade;
    }
}

class Carro extends Veiculo {
    public function acelerar() {
        $this->setVelocidade($this->getVelocidade() + 10);
    }
}

class Moto extends Veiculo {
    public function acelerar() {
        $this->setVelocidade($this->getVelocidade() + 20);
    }
}

$uva = new Carro();
$uva->setMarca("Fiat"); 
$uva->setModelo("Uno");
$uva->setVelocidade(0);
$uva->acelerar(); // Acelera o carro

$maça = new Moto();
$maça->setMarca("Honda");
$maça->setModelo("CB500");
$maça->setVelocidade(0);
$maça->acelerar(); // Acelera a moto

echo "<strong>Carro: </strong>" . $uva->getMarca() . " " . $uva->getModelo() . " - Velocidade Inicial: " . $uva->getVelocidade() . " km/h - Velocidade Final: " . $uva->getVelocidade() . " km/h\n <br><br>";
echo "<strong>Moto: </strong>" . $maça->getMarca() . " " . $maça->getModelo() . " - Velocidade Inicial: " . $maça->getVelocidade() . " km/h - Velocidade Final: " . $maça->getVelocidade() . " km/h\n";

?>