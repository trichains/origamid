// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39'
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129'
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99'
  },
  {
    descricao: 'TaXa do Banco',
    valor: 'R$ 129'
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49'
  }
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
  const cleanNumber = +item.valor.replace('R$ ', '');
  const caseSens = item.descricao.toLowerCase();
  if (caseSens.includes('taxa')) {
    taxaTotal += cleanNumber;
  } else {
    recebimentoTotal += cleanNumber;
  }
});
console.log(`O valor da soma da taxa total é de: ${taxaTotal}.`);
console.log(`O valor da soma do recebimento total é de: ${recebimentoTotal}.`);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const transportesArray = transportes.split(';');
console.log(typeof transportesArray, transportesArray);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log((html = html.split('span').join('a')));

// Retorne o último carácter da frase
const frase = 'Melhor do ano!';
console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoesTotal = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial'
];

let taxasEncontradas = [];

transacoesTotal.forEach((item) => {
  let itemFormatado = item.trim().toLowerCase();
  if (itemFormatado.includes('taxa')) {
    taxasEncontradas.push(itemFormatado);
  }
});

console.log(
  `Total de taxas: ${taxasEncontradas.length} são elas, ${taxasEncontradas.join(
    ', '
  )}.`
);
