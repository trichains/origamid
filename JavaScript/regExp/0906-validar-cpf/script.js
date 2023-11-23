import ValidarCpf from './validar-cpf.js';

const cpf = new ValidarCpf();

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const cpfInput = document.querySelector('#cpf');
  const cpfValue = cpfInput.value;

  if (cpf.validar(cpfValue)) {
    showAlert('CPF válido');
  } else {
    showAlert('CPF inválido');
  }
}

function showAlert(message) {
  alert(message);
}

// const cpf = document.querySelector('#cpf');
// const validarCpf = new ValidarCpf(cpf).iniciar();

// const validadorCPF = new ValidarCpf();

// console.log(validadorCPF.validar('111 111 111 222'))

// console.log(validarCpf)
