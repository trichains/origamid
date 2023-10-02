const imagens = document.querySelectorAll("#galeria li img");

function galeriaTrocar(event) {
  const principal =  document.querySelector('#principal')
  const clicou = event.currentTarget;
  principal.src = clicou.src;
  principal.alt = clicou.alt;
}

function galeriaClique(imagem) {
  imagem.addEventListener('click', galeriaTrocar);
}

imagens.forEach(galeriaClique)