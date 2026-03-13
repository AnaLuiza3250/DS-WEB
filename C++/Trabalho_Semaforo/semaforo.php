<?php
class Semaforo {
    private $porta;

    public function __construct($porta) {
        $this->porta = $porta;
        // configs
        //exec("mode {$this->porta} BAUD={$this->velocidade} PARITY=n DATA=8 STOP=1");
    }

    public function enviarComando($comando){
        $cmd = "echo " . $comando . " > " . $this->porta;
        exec($cmd);
    }

public function B(){
    $this->enviarComando("B");
}

public function M(){
    $this->enviarComando("M");
}

public function A(){
    $this->enviarComando("A");
}

}
?>