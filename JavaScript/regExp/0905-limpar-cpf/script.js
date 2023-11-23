const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

const clearCpf = (cpf) => {
  return cpf.replace(/\D/g, '');
};

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};

const formatarCpfs = (cpfs) => cpfs.map((cpf) => construirCPF(clearCpf(cpf)));

const substituiCpfs = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCpfs(cpfs);
  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });
  console.log(cpfsFormatados);
};

substituiCpfs(cpfsList);
