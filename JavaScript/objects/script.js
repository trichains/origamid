// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
  nome: "Cristhian",
  sobrenome: "Almeida",
  idade: 26,
};

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomeCompleto = function () {
  return `Seu nome completo é ${this.nome} ${this.sobrenome}.`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000; /* novo valor */

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: "10 anos",
  latir(pessoa) {
    if (pessoa === "homem") {
      return `au au au au!`;
    } else {
      return `o cachorro não fez nada.`;
    }
  },
};
