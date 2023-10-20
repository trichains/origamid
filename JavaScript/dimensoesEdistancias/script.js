// Verifique a distância do primeiro h1
// em relação ao topo da página
const firstH1 = document.querySelector('h1');
const distancia = firstH1.offsetTop;
console.log(firstH1);

// Retorne a soma da largura de todos os H1
const allH1 = document.querySelectorAll('h1');
let soma = 0;
allH1.forEach((item) => {
  const largura = item.offsetWidth;
  soma += largura;
});
console.log(soma);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui acessibilidade');
  } else {
    console.log(link, 'Não possui acessibilidade');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menuMobile = window.matchMedia('(max-width: 720px)').matches;

if (menuMobile) {
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile');
}
