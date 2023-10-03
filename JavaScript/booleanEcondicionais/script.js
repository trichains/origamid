// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 26;
var idadeParente = 27;
if (minhaIdade > idadeParente) {
  console.log(
    `Eu tenho ${minhaIdade} anos de idade, meu parente tem ${idadeParente} anos. Logo, minha idade é maior que a do meu parente.`
  );
} else if (minhaIdade < idadeParente) {
  console.log(
    `Eu tenho ${minhaIdade} anos de idade, meu parente tem ${idadeParente} anos. Logo, minha idade é menor que a do meu parente.`
  );
} else {
  console.log(
    `Eu tenho ${minhaIdade} anos de idade, meu parente também tem ${idadeParente} anos. Logo, minha idade é igual a do meu parente.`
  );
}
// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
if (expressao) {
  console.log(expressao);
}

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes');
} else {
  console.log('Brasil tem menos habitantes')
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
