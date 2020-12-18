export default class Modal {
  constructor(wrapper, modalBody, modalTitle, modalClose) {
    this.wrapper = document.querySelector(wrapper);
    this.container = this.wrapper.querySelector(".c-modal__container");
    this.modalBody = this.wrapper.querySelector(modalBody);
    this.modalTitle = this.wrapper.querySelector(modalTitle);
    this.modalClose = this.wrapper.querySelector(modalClose);

    // itens
    this.itens = document.querySelectorAll('[data-modal="image"]');

    // bind
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.outsideCloseModal = this.outsideCloseModal.bind(this);
  }

  // clicar fora e fechar modal
  outsideCloseModal({ target }) {
    if (!this.container.contains(target)) this.closeModal();
  }

  // fechar modal
  closeModal() {
    this.wrapper.dataset.modal = "closed";
    this.removeEvents();
  }

  // open modal
  openModal({ target }) {
    const imagem = document.createElement("img");
    imagem.src = target.src;
    imagem.alt = target.alt;

    this.modalBody.innerHTML = "";

    this.wrapper.dataset.modal = "active";
    this.modalBody.append(imagem);
    this.modalTitle.innerHTML = target.alt;

    // close modal
    this.modalClose.addEventListener("click", this.closeModal);

    // outside close modal
    setTimeout(() => {
      document.body.addEventListener("click", this.outsideCloseModal);
    }, 0);
  }

  // add events
  addEvents() {
    this.itens.forEach((item) =>
      item.addEventListener("click", this.openModal)
    );
  }

  // removeEvents
  removeEvents() {
    this.modalClose.removeEventListener("click", this.closeModal);
    document.body.removeEventListener("click", this.outsideCloseModal);
  }

  // inicia a classe
  init() {
    if (this.wrapper) {
      this.addEvents();
    }
  }
}
