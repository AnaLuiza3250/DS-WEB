void setup() {
  Serial.begin(9600);   // Mesma velocidade do PHP
  pinMode(12, OUTPUT);  // Verde
  pinMode(11, OUTPUT);  // Amarelo
  pinMode(10, OUTPUT);  // Vermelho
}

void loop(){
  digitalWrite(12, HIGH);
  delay(5000);
  digitalWrite(12, LOW);

  digitalWrite(11, HIGH);
  delay(2000);
  digitalWrite(11, LOW);

  digitalWrite(10, HIGH);
  delay(5000);
  digitalWrite(10, LOW);
}