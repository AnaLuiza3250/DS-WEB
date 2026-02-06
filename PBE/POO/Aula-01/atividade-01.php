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


class Pano{

    public $cor;

    public $tamanho;

    public $material;

    public $utilidade;

    public $validade;

    public function limpar() {
            return "Está na hora da limpeza! Pegue seu pano " . $this->cor . " do melhor tipo, de preferencia o de " . $this->material . ", bora!";
        }

        public function torcer() {
            return "Cuidado ao torcer o pano! Dependendo do tamanho pode ser mais difícil. Use um pano com " . $this->tamanho . " cm de tamanho.";
        }

        public function decorar() {
            return "Alguns panos são tão bonitos que devem ser expostos. Com a quantidade de vezes que você usou esse pano, a estimativa de 
            vida útil do seu pano é até " . $this->validade . ", depois disso, ele perde a usabilidade de " . $this->utilidade . ".";
        }
}

$Ana = new Pano();
$Ana->cor = "verde";
$Ana->tamanho = "10 cm²";
$Ana->material = "microfibra";
$Ana->utilidade = "limpar superfícies limpas";
$Ana->validade = "3 meses";
echo $Ana->limpar() . "<br>";
echo $Ana->torcer() . "<br>";
echo $Ana->decorar() . "<br><br><br>";


class Sapato{

    public $modelo;

    public $marca;

    public $tamanho;

    public $cor;

    public $utilidade;

    public function usar() {
            return "Agora que você comprou um sapato " . $this->modelo . " novinho da " . $this->marca . "você deve usá-lo com mais frequência.";
        }

        public function expor() {
            return "Alguns sapatos são tão caros que merecem uma atenção especial! Hora de expor! Principalmente sapatos " . $this->cor;
        }

        public function batizar() {
            return "CUIDADO! Seu amigo está chegando, não deixe ele ver seu sapato novo, se não ele vai deixar de servir para " . $this->utilidade;
        }
}

$Ana = new Sapato();
$Ana->modelo = "verde";
$Ana->marca = "10 cm²";
$Ana->tamanho = "microfibra";
$Ana->cor = "limpar superfícies limpas";
$Ana->utilidade = "3 meses";
echo $Ana->usar() . "<br>";
echo $Ana->expor() . "<br>";
echo $Ana->batizar() . "<br><br><br>";

?>