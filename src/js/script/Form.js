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
    // mostra as mensagens de erro
    this.errorMessage(this.form.nome, this.form.nome.value);
  }

  // valida email
  email() {
    this.email = validateForm(this.form.email.value, "email");
    this.errorMessage(this.form.email, this.email);
  }

  // valida telefone
  telefone() {
    // Mascara Telefone

    const filtro = this.form.telefone.value.replace(/[^\d]/g, "");

    // Cria a mascada de acordo com a quantidade de digitos

    this.telMask = "";

    if (filtro.length >= 8) {
      // sem 9 na frente
      if (filtro.length === 8) {
        // 0000-0000
        this.telMask = filtro.slice(0, 4) + "-" + filtro.slice(4, 8);
      }

      // com 9 na frente
      else if (filtro.length === 9) {
        // 0 0000-0000
        this.telMask = filtro.slice(0, 5) + "-" + filtro.slice(5, 9);
      }

      // fixo na frente
      else if (filtro.length === 10) {
        // 00 0000-0000
        this.telMask =
          "(" +
          filtro.slice(0, 2) +
          ")" +
          filtro.slice(2, 6) +
          "-" +
          filtro.slice(6, 10);
      }

      // com ddd (00)
      else if (filtro.length === 11) {
        // 00 0 0000-0000
        this.telMask =
          "(" +
          filtro.slice(0, 2) +
          ")" +
          filtro.slice(2, 7) +
          "-" +
          filtro.slice(5, 9);
      }

      // com ddd (000)
      else if (filtro.length >= 12) {
        // 000 0 0000-0000
        this.telMask =
          "(" +
          filtro.slice(0, 3) +
          ")" +
          filtro.slice(3, 8) +
          "-" +
          filtro.slice(8, 12);
      }
    }

    // valida telefone
    this.telefone = validateForm(this.form.telefone.value, "telefone");

    // mostra as mensagens de erro
    this.errorMessage(this.form.telefone, this.telefone);

    // adiciona numero com mascara no input
    this.form.telefone.value = this.telMask;
  }

  // valida assunto
  assunto() {
    // mostra as mensagens de erro
    this.errorMessage(this.form.assunto, this.form.assunto.value);
  }

  // valida mensagem
  mensagem() {
    // mostra as mensagens de erro
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
