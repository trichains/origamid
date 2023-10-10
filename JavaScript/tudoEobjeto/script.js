// nomeie 3 propriedades ou métodos de strings
var palavra = {
  nome: "",
  idade: "0",
  habilidade() {
    return "programar";
  },
};
nome = palavra.nome.replace("", "Cristhian");
idade = palavra.idade.replace("0", "26");
habilidade = palavra.habilidade();
console.log(nome, idade, habilidade);

// nomeie 5 propriedades ou métodos de elementos do DOM
// addEventListener
// appendChild
// id
// innerText
// innerHtml
var botao = document.querySelector(".btn");

botao.addEventListener("click", function () {
  console.log("clicou");
});

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

// Aguarde o carregamento completo do documento antes de executar o código

botao.addEventListener("click", function() {
  navigator.clipboard.writeText(botao.innerText)
  alert("copiado")
})

