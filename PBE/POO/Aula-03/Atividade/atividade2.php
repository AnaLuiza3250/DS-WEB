<?php 

abstract class Animal {
    public function fazerSom(){
        echo "Gritaaaaar!";
    }

    public function mover(){
        echo "Anda";
    }

}

class Cachorro extends Animal {
    public function fazerSom() {
        echo "Au Au!";
    }
}

class Gato extends Animal {
    public function fazerSom() {
        echo "Miauu!";
    }
}

class Passaro extends Animal {
    public function fazerSom() {
        echo "Canta!";
    }

    public function mover() {
        echo parent::mover() . " e Voa";
    }
}

echo "<h1>Cachorro</h1>";
$roger = new Cachorro();
$roger->fazerSom();
echo "<br/>";
$roger->mover();
echo "<br/><br><hr>";

echo "<h1>Gato</h1>";
$filomena = new Gato();
$filomena->fazerSom();  
echo "<br/>";
$filomena->mover();
echo "<br/><br><hr>";

echo "<h1>Pássaro</h1>";
$tuquito = new Passaro();
$tuquito->fazerSom();
echo "<br/>";
$tuquito->mover();
echo "<br/><br><hr>";

?>