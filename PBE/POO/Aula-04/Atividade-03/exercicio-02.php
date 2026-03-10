<?php

class Artista {
    public $nome;
    public $genero;

    public function __construct($nome, $genero){
        $this->nome = $nome;
        $this->genero = $genero;
    }
}

class Musica {
    public $titulo;
    public $dura;
    public Artista $artista;

    public function __construct($titulo, $dura, Artista $artista){
        $this->titulo = $titulo;
        $this->dura = $dura;
        $this->artista = $artista;
    }

    public function exibirInfo(){
        echo $this->titulo . " | Duração: " . $this->dura;
        echo "<br>Artista: " . $this->artista->nome . " | Gênero: " . $this->artista->genero;
    }
}

$artista = new Artista("Queen", "Rock");
$musica = new Musica("Bohemian Rhapsody", "5:55", $artista);
$musica->exibirInfo();

?>