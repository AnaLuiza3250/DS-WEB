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
            mais de " . $this->tamanho . "a gente conversa... Reclamando...";
        }

        public function procrastinar() {
            return "Para de deixar de lado aquilo que você tem que fazer, senão sua influência continuará
            sendo " . $this->influencia . " e seu cargo nunca passará de " . $this->cargo . ", REAGE! VAI ESTUDAR!";
        }
}

echo "<h3>Estudantes</h3><br>";

$Ana = new Estudante();
$Ana->serie = "3º ano do Ensino Médio";
$Ana->idade = "17";
$Ana->tamanho = "1,70 m";
$Ana->cargo = "Representante";
$Ana->influencia = "Alta";
echo $Ana->estudar() . "<br>";
echo $Ana->reclamar() . "<br>";
echo $Ana->procrastinar() . "<br><br><br>";

$Miguel = new Estudante();
$Miguel->serie = "3º ano do Ensino Médio";
$Miguel->idade = "17";
$Miguel->tamanho = "1,76 m";
$Miguel->cargo = "Aluno";
$Miguel->influencia = "Alta";
echo $Miguel->estudar() . "<br>";
echo $Miguel->reclamar() . "<br>";
echo $Miguel->procrastinar() . "<br><br><br>";

$Lucas = new Estudante();
$Lucas->serie = "7º ano do Ensino Fundamental";
$Lucas->idade = "12";
$Lucas->tamanho = "1,50 m";
$Lucas->cargo = "Secretário";
$Lucas->influencia = "Boa";
echo $Lucas->estudar() . "<br>";
echo $Lucas->reclamar() . "<br>";
echo $Lucas->procrastinar() . "<br><br><br>";


class Garrafa{

    public $tamanho;

    public $cor;

    public $material;

    public $bico;

    public $capacidade;

    public function encher() {
            return "Cuidado na hora de encher sua garrada de " . $this->material . " ela tem apenas " . $this->capacidade . " de
            capacidade. Enchendo...";
        }

        public function lavar() {
            return "Por sua garrafa ser " . $this->cor . " você deve ter cuidado com os produtos que você usa. Lavando...";
        }

        public function beber() {
            return "É muito mais confortável beber líquidos no bico " . $this->bico . " ainda mais com " . $this->tamanho . " de
            tamanho. Bebendo...";
        }
}

echo "<h3>Garrafas</h3><br>";

$squeezeFitness = new Garrafa();
$squeezeFitness->tamanho = "28 cm";
$squeezeFitness->cor = "Preta";
$squeezeFitness->material = "Alumínio";
$squeezeFitness->bico = "rosca";
$squeezeFitness->capacidade = "1L";
echo $squeezeFitness->encher() . "<br>";
echo $squeezeFitness->lavar() . "<br>";
echo $squeezeFitness->beber() . "<br><br><br>";

$garrafaEsportiva = new Garrafa();
$garrafaEsportiva->tamanho = "25 cm";
$garrafaEsportiva->cor = "Azul";
$garrafaEsportiva->material = "Plático";
$garrafaEsportiva->bico = "retrátil";
$garrafaEsportiva->capacidade = "750 ml";
echo $garrafaEsportiva->encher() . "<br>";
echo $garrafaEsportiva->lavar() . "<br>";
echo $garrafaEsportiva->beber() . "<br><br><br>";

$garrafaVidro = new Garrafa();
$garrafaVidro->tamanho = "25 cm";
$garrafaVidro->cor = "Azul";
$garrafaVidro->material = "Plático";
$garrafaVidro->bico = "retrátil";
$garrafaVidro->capacidade = "750 ml";
echo $garrafaVidro->encher() . "<br>";
echo $garrafaVidro->lavar() . "<br>";
echo $garrafaVidro->beber() . "<br><br><br>";


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
             . $this->voltagem . ", é importante que você troque-a. Arrumando...";
        }

        public function atualizar() {
            return "Para a capacidade de " . $this->capacidade . " recomendamos a versão 8.2.14. Atualizando!";
        }
}

echo "<h3>Impressoras 3D</h3><br>";

$um = new Impressora3D();
$um->cor = "prea";
$um->tamanho = "40 cm";
$um->profundidade = "40 cm";
$um->capacidade = "12.100.000 mm";
$um->voltagem = "110 V";
echo $um->imprimir() . "<br>";
echo $um->arrumar() . "<br>";
echo $um->atualizar() . "<br><br><br>";

$dois = new Impressora3D();
$dois->cor = "branca";
$dois->tamanho = "50 cm";
$dois->profundidade = "45 cm";
$dois->capacidade = "36.000.000 mm";
$dois->voltagem = "220 V";
echo $dois->imprimir() . "<br>";
echo $dois->arrumar() . "<br>";
echo $dois->atualizar() . "<br><br><br>";

$tres = new Impressora3D();
$tres->cor = "azul";
$tres->tamanho = "60 cm";
$tres->profundidade = "55 cm";
$tres->capacidade = "72.000.000 mm";
$tres->voltagem = "220 V";
echo $tres->imprimir() . "<br>";
echo $tres->arrumar() . "<br>";
echo $tres->atualizar() . "<br><br><br>";


class Pano{

    public $cor;

    public $tamanho;

    public $material;

    public $utilidade;

    public $validade;

    public function limpar() {
            return "Está na hora da limpeza! Pegue seu pano " . $this->cor . " do melhor tipo, de preferencia o de " . $this->material . 
            ", bora! Limpando...";
        }

        public function torcer() {
            return "Cuidado ao torcer o pano! Dependendo do tamanho pode ser mais difícil. Use um pano com " . $this->tamanho . 
            " cm de tamanho. Torcendo...";
        }

        public function decorar() {
            return "Alguns panos são tão bonitos que devem ser expostos. Com a quantidade de vezes que você usou esse pano, a estimativa de 
            vida útil do seu pano é até " . $this->validade . ", depois disso, ele perde a usabilidade de " . $this->utilidade . ". Decorando...";
        }
}

echo "<h3>Panos</h3><br>";

$panoPrato = new Pano();
$panoPrato->cor = "branco";
$panoPrato->tamanho = "3500 cm²";
$panoPrato->material = "algodão";
$panoPrato->utilidade = "secar louça";
$panoPrato->validade = "2 anos";
echo $panoPrato->limpar() . "<br>";
echo $panoPrato->torcer() . "<br>";
echo $panoPrato->decorar() . "<br><br><br>";

$flanelaLimpeza = new Pano();
$flanelaLimpeza->cor = "amarelo";
$flanelaLimpeza->tamanho = "1600 cm²";
$flanelaLimpeza->material = "flanela";
$flanelaLimpeza->utilidade = "polir móveis";
$flanelaLimpeza->validade = "1 ano";
echo $flanelaLimpeza->limpar() . "<br>";
echo $flanelaLimpeza->torcer() . "<br><br><br>";

$toalhaAcademia = new Pano();
$toalhaAcademia->cor = "preto";
$toalhaAcademia->tamanho = "5000 cm²";
$toalhaAcademia->material = "poliéster";
$toalhaAcademia->utilidade = "absorver suor";
$toalhaAcademia->validade = "2 anos";
echo $toalhaAcademia->limpar() . "<br>";
echo $toalhaAcademia->torcer() . "<br><br><br>";


class Sapato{

    public $modelo;

    public $marca;

    public $tamanho;

    public $cor;

    public $utilidade;

    public function usar() {
            return "Agora que você comprou um sapato " . $this->modelo . " novinho da " . $this->marca . "você deve usá-lo com mais frequência. Usando...";
        }

        public function expor() {
            return "Alguns sapatos são tão caros que merecem uma atenção especial! Principalmente sapatos " . $this->cor . "Hora de expor!";
        }

        public function batizar() {
            return "CUIDADO! Seu amigo está chegando, não deixe ele ver seu sapato novo, se não ele vai deixar de servir para " . $this->utilidade;
        }
}

echo "<h3>Sapatos</h3><br>";

$Joao = new Sapato();
$Joao->modelo = "Tênis Esportivo";
$Joao->marca = "Nike";
$Joao->tamanho = "42";
$Joao->cor = "Preto";
$Joao->utilidade = "Academia e corrida";
echo $Joao->usar() . "<br>";
echo $Joao->expor() . "<br>";
echo $Joao->batizar() . "<br><br><br>";

$Maria = new Sapato();
$Maria->modelo = "Sapatilha";
$Maria->marca = "Moleca";
$Maria->tamanho = "36";
$Maria->cor = "Bege";
$Maria->utilidade = "Uso diário";
echo $Maria->usar() . "<br>";
echo $Maria->expor() . "<br>";
echo $Maria->batizar() . "<br><br><br>";

$Carlos = new Sapato();
$Carlos->modelo = "Sapato Social";
$Carlos->marca = "Ferracini";
$Carlos->tamanho = "40";
$Carlos->cor = "Marrom";
$Carlos->utilidade = "Trabalho e reuniões";
echo $Carlos->usar() . "<br>";
echo $Carlos->expor() . "<br>";
echo $Carlos->batizar() . "<br><br><br>";

?>