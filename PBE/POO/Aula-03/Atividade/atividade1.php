<?php

class Pessoa {
    private $nome;
    private $idade;

    public function obterDados($nome, $idade) {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function getNome() {
        return $this->nome;
    }

    public function getIdade() {
        return $this->idade;
    }
}

class Funcionario extends Pessoa {
    private $salario;

    public function setSalario($salario) {
        $this->salario = $salario;
    }

    public function getSalario() {
        return $this->salario;
    }

    public function calcularSalario() {
        return 0;
    }
}


class Gerente extends Funcionario {
    public function calcularSalario(){
        return $this->getSalario() * 0.2;
    }
    
}

class Desenvolvedor extends Funcionario {
    public function calcularSalario() {
        return $this->getSalario() * 0.1;
    }

}


//dessa forma, quando eu for criar um objeto da classe Gerente ou Desenvolvedor, 
//eu posso passar os parâmetros de NOME, IDADE E SALÁRIO, pq as classes estão herdando.

//$objeto = new Gerente/Desenvolvedor/Pessoa();
//objeto->obterDados("Bruno", 25);

$Ana = new Desenvolvedor();
$Ana->obterDados("Ana", 30);
$Ana->setSalario(5000);

echo "<h1>Dados do Desenvolvedor</h1>";
echo "Nome: " . $Ana->getNome() . "<br/>";
echo "Idade: " . $Ana->getIdade() . "<br/>";
echo "Bônus: R$ " . $Ana->calcularSalario() . "<br/><br><hr>";

$Carlos = new Gerente();
$Carlos->obterDados("Carlos", 45);
$Carlos->setSalario(10000);

echo "<h1>Dados do Gerente</h1>";
echo "Nome: " . $Carlos->getNome() . "<br/>";
echo "Idade: " . $Carlos->getIdade() . "<br/>";
echo "Bônus: R$ " . $Carlos->calcularSalario() . "<br/><br><hr>";

//Comparação gerente e desenvolvedor, para mostrar a diferença do bônus que cada um recebe, mesmo com o mesmo salário base.
$Gerente = new Gerente();
$Gerente->obterDados("Lucia", 40);
$Gerente->setSalario(15000);

$Dev = new Desenvolvedor();
$Dev->obterDados("Paulo", 28);
$Dev->setSalario(8000);

echo "<h1>Comparação</h1>";
echo $Gerente->getNome() . " recebe bônus de R$ " . $Gerente->calcularSalario() . "<br/>";
echo $Dev->getNome() . " recebe bônus de R$ " . $Dev->calcularSalario() . "<br/>";
