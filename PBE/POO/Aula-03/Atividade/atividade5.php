<?php

class Documento {
    private $numero;

    public function getNumero() {
            return $this->numero;
        }

        public function setNumero($numero) {
            $this->numero = $numero;
        }

        public function validaCPF($cpf) {
        // Remove caracteres não numéricos
        $cpf = preg_replace('/[^0-9]/', '', $cpf);

        // Verifica se tem 11 dígitos
        if (strlen($cpf) != 11) {
            return false;
        }

        // Elimina CPFs inválidos conhecidos (sequências repetidas)
        if (preg_match('/(\d)\1{10}/', $cpf)) {
            return false;
        }

        // Validação dos dígitos verificadores
        for ($t = 9; $t < 11; $t++) {
            $d = 0;
            for ($c = 0; $c < $t; $c++) {
                $d += $cpf[$c] * (($t + 1) - $c);
            }
            $d = ((10 * $d) % 11) % 10;
            if ($cpf[$c] != $d) {
                return false;
            }
        }

        return true;
    }

}

class CPF extends Documento {
    public function validarCPF() {
        return $this->validaCPF($this->getNumero());
    }
}

$cpf1 = new CPF();
$cpf1->setNumero("123.456.789-00");
if ($cpf1->validarCPF()) {
    echo "<h2>CPF válido!</h2><br>";
    echo "Número do CPF: " . $cpf1->getNumero() . "<br>";
} else {
    echo "<h2>CPF inválido!</h2><br>";
    echo "Coloque um CPF válido!<br>";
}

$cpf2 = new CPF();
$cpf2->setNumero("256.152.218-01");
if ($cpf2->validarCPF()) {
    echo "<h2>CPF válido!</h2><br>";
    echo "Número do CPF: " . $cpf2->getNumero() . "<br>";
} else {
    echo "<h2>CPF inválido!</h2><br>";
    echo "Coloque um CPF válido!<br>";
}

?>