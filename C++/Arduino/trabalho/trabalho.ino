// Variáveis para armazenar os tempos vindos do PHP
long tempoVerde = 5000;
long tempoVermelho = 5000;
long tempoAmarelo = 2000;

void setup() {
  Serial.begin(9600);   // Mesma velocidade do PHP
  pinMode(12, OUTPUT);  // Verde
  pinMode(11, OUTPUT);  // Amarelo
  pinMode(10, OUTPUT);  // Vermelho
}

void loop() {
  // Se o PHP enviou algo...
  if (Serial.available() > 0) {
    // O Arduino lê os números separados por vírgula que o PHP mandou
    tempoVerde = Serial.parseInt();
    tempoVermelho = Serial.parseInt();
    tempoAmarelo = Serial.parseInt();
  }

  // Executa o semáforo com os tempos que recebeu
  digitalWrite(12, HIGH);
  delay(tempoVerde);
  digitalWrite(12, LOW);

  digitalWrite(11, HIGH);
  delay(tempoAmarelo);
  digitalWrite(11, LOW);

  digitalWrite(10, HIGH);
  delay(tempoVermelho);
  digitalWrite(10, LOW);
}