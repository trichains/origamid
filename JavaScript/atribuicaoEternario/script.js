// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
var soma = 500;

console.log((scroll += soma));

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;

var darCredito = (possuiCarro && possuiCasa);

if (darCredito) {
  console.log('Sua requisição de crédito foi aceita', darCredito);
} else {
  console.log("Sua solicitação de crédito foi negada", darCredito)
}
