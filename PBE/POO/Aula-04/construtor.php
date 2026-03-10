<?php

class Pessoa {
    public $nome;
    public $idade;

    public function __construct($nome, $idade) {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function exibirDados() {
        echo "O nome da pessoa é " . $this->nome. " e a idade é " . $this->idade;
    }

    public function alterarDados($novoNome, $novaIdade) {
        $this->nome = $novoNome;
        $this->idade = $novaIdade;
    }

    /*public function __destroy(){}  MÉTODO DESTRUTOR, CASO ALGO FOR FEITO PARA DESTRUIR UM OBJETO - COMO UNSET - ELE SERÁ ACIONADO PARA 
    REALIZAR ALGUMA AÇÃO ANTES DE DESTRUIR O OBJETO*/
}

$pessoa = new Pessoa("Ana", 17);
echo $pessoa->exibirDados();

echo "<br>";

$pessoa->alterarDados("Aninha", 18);
echo $pessoa->exibirDados();

?>