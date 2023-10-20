// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const footer = document.querySelector('.copy');

const menuClone = menu.cloneNode(true);
footer.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const faQ = document.querySelector('.faq-lista');
const primeiroDT = faQ.querySelector('dt');

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDT.nextElementSibling;
console.log(proximoDD);

// Substitua o conteúdo html de .faq pelo de .animais
const aves = document.querySelector('.aves');

faQ.innerHTML = aves.innerHTML;
