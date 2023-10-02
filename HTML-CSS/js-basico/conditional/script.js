const botao = document.querySelector('button');
const texto = document.querySelector('p')

if (botao) {
  botao.addEventListener('click', somar);
}

function somar() {
  const div = document.querySelector('div');
  const novoTotal = Number(div.innerHTML) + 1;
  if (novoTotal < 10) {
    div.innerHTML = novoTotal;
  } else {
    texto.innerHTML = 'Não é possível adicionar mais valores.'
  }
}


