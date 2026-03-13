void setup() {

  pinMode(13, OUTPUT); //porta saída
  Serial.begin(9600); //inicializando a comunicação serial

}

void loop() {

  if (Serial.available()>0){
    char comando = Serial.read();

    if (comando == 'L'){  //para STRING aspas dupla ("), para CHAR aspas simples (')
      digitalWrite(13, HIGH); //ligar o led
    }

    if (comando == 'D'){
      digitalWrite(13, LOW); //desligar o led
    }
  }

}

// = ATRIBUIÇÃO
// == COMPARAÇÃO
// === COMPARA TIPO E VALOR

// PARA USAR EM CMD (LINHA DE COMANDO)
// mode com + porta do arduíno -> vai mostrar as configurações do hardware para com a porta
// mode com5 (porta) 9600, n, 8 -> vai estar configurando
// para usar o programa pelo cmd: echo + comando + porta
// echo L > com5 -> isso faz ligar