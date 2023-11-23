export default class ValidarCpf {
  constructor(element) {
    this.element = element;
    this.erroElement = null;
    this.cpfElement = null;
    this.validoClass = 'valido';
    this.erroClass = 'erro';
  }

  limpar(cpf) {
    return cpf.replace(/\D+/g, '');
  }

  formatar(cpf) {
    const cpfLimpo = this.limpar(cpf);
    return cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }

  validar(cpf) {
    return /^\d{3}([-.\s]?\d{3}){3}[-.\s]?\d{2}$/.test(cpf);
  }

  validarNaMudanca(event) {
    const cpfElement = event.target;
    const cpf = cpfElement.value;
    if (this.validar(cpf)) {
      cpfElement.value = this.formatar(cpf);
      cpfElement.classList.toggle(this.validoClass, true);
      cpfElement.classList.toggle(this.erroClass, false);
      this.erroElement.classList.toggle('ativar', false);
    } else {
      cpfElement.classList.toggle(this.validoClass, false);
      cpfElement.classList.toggle(this.erroClass, true);
      this.erroElement.classList.toggle('ativar', true);
    }
  }

  adicionarEvento() {
    this.element.addEventListener('change', (event) => {
      if (event.target === this.cpfElement) {
        this.validarNaMudanca(event);
      }
    });
  }

  adicionarErroSpan() {
    this.erroElement = document.createElement('span');
    this.erroElement.classList.add('erro-text');
    this.erroElement.innerText = 'CPF Inválido';
    this.element.parentElement.insertBefore(this.erroElement, this.element.nextElementSibling);
  }

  iniciar() {
    this.cpfElement = this.element;
    this.adicionarEvento();
    this.adicionarErroSpan();
    return this;
  }
}