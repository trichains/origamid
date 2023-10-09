// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
  return !!valor;
}

console.log(isTruthy('aaa'))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

var lado = perimetroQuadrado(3)
console.log(lado);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

var nomeCompletoString = nomeCompleto('Cristhian', 'Almeida')
console.log(nomeCompletoString);
// Crie uma função que verifica se um número é par
function isEven(numero) {
  return numero % 2 === 0;
}

var evenOrOdd = isEven(3);

if (evenOrOdd) {
  console.log("o numero é par")
} else {
  console.log("o numero é impar")
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
}

var dado = tipoDeDado(4);
console.log(dado);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function () {
  console.log('Cristhian');
});
// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
