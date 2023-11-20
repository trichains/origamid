// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(function () {
  // Altere apenas o código abaixo desta linha
}());

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(function () {
  console.log('Função ativa!');
})
