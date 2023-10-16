// Retorne no console todas as imagens do site
const imgSite = document.querySelectorAll('img');
console.log(imgSite);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgAnimais);
// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('a[href^="#"]');
console.log(linksInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const avesDescri = document.querySelector('.aves-descricao h2');
console.log(avesDescri);
// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]);
