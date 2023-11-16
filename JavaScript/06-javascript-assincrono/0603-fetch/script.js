// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const cepInput = document.getElementById('cep');
const submitButton = document.getElementById('submit');
const retornoElement = document.querySelector('.cepRetorno');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const cep = cepInput.value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  // Check if the cep input is empty
  if (cep) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Update the retorno element with the retrieved data
        retornoElement.innerHTML = `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`;
      });
  } else {
    alert('Por favor, digite um CEP');
  }
});

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
async function updateBitcoinPrice() {
  const url = 'https://blockchain.info/ticker';

  try {
    const response = await fetch(url);
    const data = await response.json();
    const brlPrice = data.BRL.buy.toFixed(2);
    document.querySelector('.bitcoin').innerHTML = `R$ ${brlPrice}`;
  } catch (error) {
    console.error(error);
  }
}
setInterval(updateBitcoinPrice, 30000);

updateBitcoinPrice();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const jokeButton = document.getElementById('get-joke');

function getJoke() {
  const apiUrl = 'https://api.chucknorris.io/jokes/random';
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.joke').innerHTML = data.value;
    });
}

jokeButton.addEventListener('click', getJoke);

getJoke();
