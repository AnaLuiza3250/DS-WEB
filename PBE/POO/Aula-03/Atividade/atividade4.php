<?php

abstract class Produto {
    public $nome;
    public $preco;  
    public $estoque;

    abstract public function calcularDesconto();

    public function getNome (){
        return $this->nome;
    }

    public function setNome ($nome){
        $this->nome = $nome;
    }

    public function getPreco (){
        return $this->preco;
    }

    public function setPreco ($preco){
        $this->preco = $preco;
    }

    public function getEstoque (){
        return $this->estoque;
    }

    public function setEstoque ($estoque){
        $this->estoque = $estoque;
    }

}

class Eletronico extends Produto {
    public function calcularDesconto() {

        if ($this->estoque < 5) {
            return $this->preco - ($this->preco * 0.2);
        }
        else{
            return $this->preco - ($this->preco * 0.1);
        }
    }
}

class Roupas extends Produto {
    public function calcularDesconto() {

        if ($this->estoque < 5) {
            return $this->preco - ($this->preco * 0.3);
        }
        else{
            return $this->preco - ($this->preco * 0.2);
        }
    }
}

$tv = new Eletronico();
$tv->setNome("Smart TV");
$tv->setPreco(2000);
$tv->setEstoque(3);
echo "<strong>Produto: </strong>" . $tv->getNome() . 
"<br>Preço: R$ " . $tv->getPreco() . 
"<br>Estoque: " . $tv->getEstoque() . " unidades
<br>Preço com desconto: R$ " . $tv->calcularDesconto() . "<br><br>";

$camisa = new Roupas();
$camisa->setNome("Camisa Polo");
$camisa->setPreco(100);
$camisa->setEstoque(10);
echo "<strong>Produto: </strong>" . $camisa->getNome() . 
"<br>Preço: R$ " . $camisa->getPreco() . 
"<br>Estoque: " . $camisa->getEstoque() . " unidades
<br>Preço com desconto: R$ " . $camisa->calcularDesconto() . "<br><br>";

$celular = new Eletronico();
$celular->setNome("Smartphone");
$celular->setPreco(1500);
$celular->setEstoque(2);

echo "<strong>Produto: </strong>" . $celular->getNome() .
     "<br>Preço: R$ " . $celular->getPreco() .
     "<br>Estoque: " . $celular->getEstoque() . " unidades" .
     "<br>Preço com desconto: R$ " . $celular->calcularDesconto() . "<br><br>";

$notebook = new Eletronico();
$notebook->setNome("Notebook Gamer");
$notebook->setPreco(5000);
$notebook->setEstoque(8);

echo "<strong>Produto: </strong>" . $notebook->getNome() .
     "<br>Preço: R$ " . $notebook->getPreco() .
     "<br>Estoque: " . $notebook->getEstoque() . " unidades" .
     "<br>Preço com desconto: R$ " . $notebook->calcularDesconto() . "<br><br>";

$jaqueta = new Roupas();
$jaqueta->setNome("Jaqueta Jeans");
$jaqueta->setPreco(250);
$jaqueta->setEstoque(3);

echo "<strong>Produto: </strong>" . $jaqueta->getNome() .
     "<br>Preço: R$ " . $jaqueta->getPreco() .
     "<br>Estoque: " . $jaqueta->getEstoque() . " unidades" .
     "<br>Preço com desconto: R$ " . $jaqueta->calcularDesconto() . "<br><br>";

$tenis = new Roupas();
$tenis->setNome("Tênis Esportivo");
$tenis->setPreco(300);
$tenis->setEstoque(12);

echo "<strong>Produto: </strong>" . $tenis->getNome() .
     "<br>Preço: R$ " . $tenis->getPreco() .
     "<br>Estoque: " . $tenis->getEstoque() . " unidades" .
     "<br>Preço com desconto: R$ " . $tenis->calcularDesconto() . "<br><br>";

?>