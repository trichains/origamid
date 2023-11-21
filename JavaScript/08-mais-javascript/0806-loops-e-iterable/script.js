// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const itens = document.querySelectorAll('li');

for (let item of itens) {
  item.classList.add('ativo');
}
// Utilize o for...in para listar
// todas as propriedades e valores
// do objeto window
for (let prop in window) {
  console.log(`${prop}: ${window[prop]}`);
}