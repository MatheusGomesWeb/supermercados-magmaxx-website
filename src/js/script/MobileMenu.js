export default class MobileMenu {
  constructor(button, list) {
    this.button = document.querySelector(button);
    this.list = document.querySelector(list);

    // bind
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
  }

  // Fechar o menu se estiver aberto
  closeMenu() {
    this.button.dataset.menu = "close";
    this.list.dataset.menuList = "close";

    this.removeEvents();

    this.addEvents();
  }

  // Clicar fora e fechar
  outsideClick({ target }) {
    if (
      this.button.dataset.menu === "open" &&
      !target.hasAttribute("data-menu-list") &&
      !target.hasAttribute("data-menu")
    ) {
      this.closeMenu();
    }
  }

  // Abre o menu ao clicar no botao
  openMenu() {
    this.button.dataset.menu = "open";
    this.list.dataset.menuList = "open";

    // adiciona evento de fechar menu ao abrir
    this.button.addEventListener("click", this.closeMenu);

    // adiciona evento clicar fora e fechar ao body
    document.body.addEventListener("click", this.outsideClick);
  }

  // remove eventos
  removeEvents() {
    this.button.removeEventListener("click", this.openMenu);
    this.button.removeEventListener("click", this.closeMenu);
    document.body.removeEventListener("click", this.outsideClick);
  }

  // adiciona evento de click no botao
  addEvents() {
    this.button.addEventListener("click", this.openMenu);
  }

  // inicia a classe
  init() {
    if (this.button && this.list) {
      this.addEvents();
    }
  }
}
