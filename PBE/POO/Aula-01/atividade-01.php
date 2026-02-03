<?php

class Estudante{

    public $serie;

    public $idade;

    public $tamanho;

    public $cargo;

    public $influencia;

    public function estudar() {
            return "Hora de estudar! Abra seu livro do " . $this->serie;
        }

        public function reclamar() {
            return "Você tem apenas " . $this->idade . " anos e reclama de tudo. Quando você tiver
            mais de " . $this->tamanho . "a gente conversa";
        }

        public function procrastinar() {
            return "Para de deixar de lado aquilo que você tem que fazer, senão sua influência continuará
            sendo " . $this->influencia . " e seu cargo nunca passará de " . $this->cargo . ", REAGE!";
        }
}

$Ana = new Estudante();
$Ana->serie = "3º ano do Ensino Médio";
$Ana->idade = "17";
$Ana->tamanho = "1,70 m";
$Ana->cargo = "Representante";
$Ana->influencia = "Alta";
echo $Ana->estudar() . "<br>";
echo $Ana->reclamar() . "<br>";
echo $Ana->procrastinar() . "<br><br><br>";


class Garrafa{

    public $tamanho;

    public $cor;

    public $material;

    public $bico;

    public $capacidade;

    public function encher() {
            return "Cuidado na hora de encher sua garrada de " . $this->material . " ela tem apenas " . $this->capacidade . " de
            capacidade";
        }

        public function lavar() {
            return "Por sua garrafa ser " . $this->cor . " você deve ter cuidado com os produtos que você usa";
        }

        public function beber() {
            return "É muito mais confortável beber líquidos no bico " . $this->bico . " ainda mais com " . $this->tamanho . " de
            tamanho";
        }
}

$Ana = new Garrafa();
$Ana->tamanho = "30 cm";
$Ana->cor = "Preta";
$Ana->material = "Metal";
$Ana->bico = "aberto";
$Ana->capacidade = "200 ml";
echo $Ana->encher() . "<br>";
echo $Ana->lavar() . "<br>";
echo $Ana->beber() . "<br><br><br>";


class Impressora3D{

    public $cor;

    public $tamanho;

    public $profundidade;

    public $capacidade;

    public $voltagem;

    public function imprimir() {
            return "Nossa, sua impressora é muito linda, a cor " . $this->cor . " é muito legal, ainda mais com " . $this->tamanho . "
            de tamanho. Imprimindo!";
        }

        public function arrumar() {
            return "Para impressoras com profundida de " . $this->profundidade . " é necessário uma voltagem diferente de "
             . $this->voltagem . ", é importante que você troque-a";
        }

        public function atualizar() {
            return "Para a capacidade de " . $this->capacidade . " recomendamos a versão 8.2.14. Atualizando!";
        }
}

$Ana = new Impressora3D();
$Ana->cor = "roxa";
$Ana->tamanho = "34 cm²";
$Ana->profundidade = "Metal";
$Ana->capacidade = "aberto";
$Ana->voltagem = "200 ml";
echo $Ana->imprimir() . "<br>";
echo $Ana->arrumar() . "<br>";
echo $Ana->atualizar() . "<br><br><br>";

?>