// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInterno = document.querySelectorAll('a[href^="#"]');

function handleLink(e) {
  e.preventDefault();
  this.classList.toggle('ativo');
}
linkInterno.forEach((link) => {
  link.addEventListener('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementos = document.querySelectorAll('body *');

function handleElemento(e) {
  this.remove();
}

elementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleKeyT(e) {
  if (e.key === 't') {
    document.documentElement.classList.toggle('textomaior')
  }
}

window.addEventListener('keydown', handleKeyT);
