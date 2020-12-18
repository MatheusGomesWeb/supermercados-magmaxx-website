import Message from "./Message";
import validateForm from "./ValidateForm";

export default class Form {
  constructor() {
    this.form = document.forms.contato;

    // bind
    this.nome = this.nome.bind(this);
    this.email = this.email.bind(this);
    this.telefone = this.telefone.bind(this);
    this.assunto = this.assunto.bind(this);
    this.mensagem = this.mensagem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // valida nome
  nome() {
    this.errorMessage(this.form.nome, this.form.nome.value);
  }

  // valida email
  email() {
    this.email = validateForm(this.form.email.value, "email");
    this.errorMessage(this.form.email, this.email);
  }

  // valida telefone
  telefone() {
    this.telefone = validateForm(this.form.telefone.value, "telefone");
    this.errorMessage(this.form.telefone, this.telefone);
  }

  // valida assunto
  assunto() {
    this.errorMessage(this.form.assunto, this.form.assunto.value);
  }

  // valida mensagem
  mensagem() {
    this.errorMessage(this.form.mensagem, this.form.mensagem.value);
  }

  // pinta o input com erro ou sucesso e adiciona mensagem de erro
  errorMessage(input, value) {
    // Limpar campo
    function limparCampo() {
      if (input.style.borderColor === "red") input.value = "";
    }

    // input style
    function inputStyle(type) {
      if (type === "error") {
        input.style.border = "1px solid red";
        input.focus();
        input.addEventListener("click", limparCampo);
      } else if (type === "success") {
        input.style.border = "1px solid green";
        input.removeEventListener("click", limparCampo);
      }
    }

    // instancia a classe para aparecer mensagens no topo
    const message = new Message(".c-message", ".c-message__text", "error");

    // mostra mensagens da regexp e pinta borda vermelha
    if (value.message) {
      message.showMessage(value.message);
      inputStyle("error");

      // mostra mensagens de campo vazio e pinta borda vermelha
    } else if (!value) {
      message.showMessage("Preencha um valor no campo " + input.name);
      inputStyle("error");

      // fecha a mensagem de erro e pinta borda de verde
    } else {
      inputStyle("success");
      message.closeMessage();
    }
  }

  // Enviar
  handleSubmit(event) {
    event.preventDefault();

    // armazena TRUE se todos os campos estiverem corretos
    let camposValidados = false;

    if (this.telefone.message) {
      this.form.telefone.focus();
      camposValidados = false;
    } else if (this.email.message) {
      this.form.email.focus();
      camposValidados = false;
    } else if (!this.form.nome.value) {
      this.nome();
      this.form.nome.focus();
      camposValidados = false;
    } else if (!this.form.email.value) {
      this.email();
      this.form.email.focus();
      camposValidados = false;
    } else if (!this.form.telefone.value) {
      this.telefone();
      this.form.telefone.focus();
      camposValidados = false;
    } else if (!this.form.assunto.value) {
      this.assunto();
      this.form.assunto.focus();
      camposValidados = false;
    } else if (!this.form.mensagem.value) {
      this.mensagem();
      this.form.mensagem.focus();
      camposValidados = false;
    } else {
      camposValidados = true;
    }

    // se todos os campos estiverem corretos faça
    if (camposValidados) {
      // Tenta fazer o fetch (POST) na API
      const fetch = true;

      // Se o fetch foi um sucesso
      if (fetch) {
        const message = new Message(
          ".c-message",
          ".c-message__text",
          "success"
        );

        // mostra mensagem de sucesso e desabilita o botao de submit pra não enviar novamente
        message.showMessage("Formulário enviado com sucesso !");
        this.form.enviar.disabled = true;

        // recarrega a pagina em 3 segundos
        setTimeout(() => {
          location.reload(true);
        }, 3000);

        // Se o post na API der erro
      } else {
        const message = new Message(".c-message", ".c-message__text", "error");

        // mostra mensagem de erro e desabilita o botao de submit pra não enviar novamente
        message.showMessage(
          "Erro ao enviar o formulario, Problemas em nossa API, tenta novamente mais tarde"
        );
        this.form.enviar.disabled = true;

        // recarrega a pagina em 3 segundos
        setTimeout(() => {
          location.reload(true);
        }, 3000);
      }
    }
  }

  // Adiciona eventos ao formulario
  addEvents() {
    this.form.nome.addEventListener("change", this.nome);
    this.form.email.addEventListener("change", this.email);
    this.form.telefone.addEventListener("change", this.telefone);
    this.form.assunto.addEventListener("change", this.assunto);
    this.form.mensagem.addEventListener("change", this.mensagem);
    this.form.addEventListener("submit", this.handleSubmit);
  }

  // inicia a classe
  init() {
    if (this.form) this.addEvents();
  }
}
