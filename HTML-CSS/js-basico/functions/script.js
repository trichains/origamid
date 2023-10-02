// function livro(nome, ano, autor) {
//   const nomeUpp = nome.toUpperCase();
//   const totalAnos = 2023 - ano;
//   const frase = nome + ' por ' + autor;
//   const objeto = {
//     nome: nomeUpp,
//     totalAnos,
//     frase,
//   };
//   return objeto;
// }

// Simplificado:

function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase,
    totalAnos: 2023 - ano,
    frase: nome + ' por ' + autor,
  };
}

const livroRetorno = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');

console.log(livroRetorno.frase)