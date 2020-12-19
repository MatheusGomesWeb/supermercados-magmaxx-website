import debounce from "./Debounce";

export default class Scroll {
  constructor(clickElement) {
    this.clickElement = document.querySelector(clickElement);

    // bind
    this.scrollTop = this.scrollTop.bind(this);
    this.scroll = this.scroll.bind(this);
  }

  // mostra elemento na tela
  showElement() {
    this.clickElement.style.opacity = 1;
    this.clickElement.style.zIndex = 9999;
  }

  // esconde elemento na tela
  hideElement() {
    this.clickElement.style.opacity = 0;
    this.clickElement.style.zIndex = -9999;
  }

  // Aparece o botao clicavel quando estiver 2/3 da tela
  scroll() {
    this.scrollLength = Math.round(window.pageYOffset);
    // this.windowHeight = window.innerHeight;

    this.windowHeight = document.body.clientHeight / 2.5;

    if (this.scrollLength > this.windowHeight) {
      this.showElement();
    } else {
      this.hideElement();
    }
  }

  // Faz o scroll suave até o elemento especificado
  scrollTop() {
    this.elementTargetScroll = document.querySelector(
      `.${this.clickElement.dataset.scrolltop}`
    );

    this.elementTargetScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }

  // adiciona eventos
  addEvents() {
    this.clickElement.addEventListener("click", this.scrollTop);
    window.addEventListener("scroll", debounce(this.scroll, 100));
  }

  // inicia a clase
  init() {
    if (this.clickElement) {
      this.addEvents();
      this.hideElement();
    }
  }
}
