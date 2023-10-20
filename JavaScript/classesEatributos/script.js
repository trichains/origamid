// Adicione a classe ativo a todos os itens do menu
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const menu = document.querySelectorAll('.menu a');
menu.forEach((item) => {
  item.classList.add('ativo');
  item.classList.remove('ativo');
});

menu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt');
  console.log(possuiAtributo);
  if (possuiAtributo) {
    console.log('sim, possui o atributo alt');
  }
});
// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'google.com')