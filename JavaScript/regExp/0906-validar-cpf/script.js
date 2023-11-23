import ValidarCpf from './validar-cpf.js';

const cpfValidator = new ValidarCpf();

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const cpfInput = document.querySelector('#cpf');
  const cpfValue = cpfInput.value;

  if (cpfValidator.validar(cpfValue)) {
    showAlert('CPF válido');
  } else {
    showAlert('CPF inválido');
  }
}

function showAlert(message) {
  alert(message);
}