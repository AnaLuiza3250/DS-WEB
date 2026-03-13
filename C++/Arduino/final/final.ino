// Variáveis para armazenar os tempos vindos do PHP

void setup() {
  Serial.begin(9600);   // Mesma velocidade do PHP
  pinMode(12, OUTPUT);  // Verde
  pinMode(11, OUTPUT);  // Amarelo
  pinMode(10, OUTPUT);  // Vermelho
}

void loop() {
  // Se o PHP enviou algo...
  if (Serial.available()>0){
    char comando = Serial.read();

      if (comando == 'B') {
        digitalWrite(12, HIGH);
        delay(20000);
        digitalWrite(12, LOW);

        digitalWrite(11, HIGH);
        delay(5000);
        digitalWrite(11, LOW);

        digitalWrite(10, HIGH);
        delay(20000);
        digitalWrite(10, LOW);  
      
      }

      if (comando == 'M') {
        digitalWrite(12, HIGH);
        delay(15000);
        digitalWrite(12, LOW);

        digitalWrite(11, HIGH);
        delay(4000);
        digitalWrite(11, LOW);

        digitalWrite(10, HIGH);
        delay(15000);
        digitalWrite(10, LOW);
      }

      if (comando == 'A') {
          digitalWrite(12, HIGH);
          delay(10000);
          digitalWrite(12, LOW);

          digitalWrite(11, HIGH);
          delay(3000);
          digitalWrite(11, LOW);

          digitalWrite(10, HIGH);
          delay(10000);
          digitalWrite(10, LOW);
      }
    }
}