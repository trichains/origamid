const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();
comidas.push('Arroz');
comidas.unshift('Peixe', 'Batata');

console.log(comidas);

console.log(`primeiro valor: ${primeiroValor}.\nultimo valor: ${ultimoValor}.`);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort();
estudantes.reverse();
const joana = estudantes.includes('Joana');
const juliana = estudantes.includes('Juliana');
if (joana) {
  console.log('Joana faz parte dos estudantes.');
} else {
  console.log('Joana não faz parte dos estudantes.');
}

if (juliana) {
  console.log('Juliana faz parte dos estudantes.');
} else {
  console.log('Juliana não faz parte dos estudantes.');
}

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section').join('ul').split('div').join('li');

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros)
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosOriginal = carros.slice();
carros.pop()
