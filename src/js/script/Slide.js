export default class Slide {
  constructor(wrapper, imagens, bulletsWrapper, next, prev) {
    // slide wrapper
    this.wrapper = document.querySelector(wrapper);

    // images
    this.imagens = this.wrapper.querySelectorAll(imagens);

    // arrows
    this.next = this.wrapper.querySelector(next);
    this.prev = this.wrapper.querySelector(prev);

    // Bullets Wrapper
    this.bulletsWrapper = document.querySelector(bulletsWrapper);

    // bind
    this.slideBullets = this.slideBullets.bind(this);

    // time delay
    this.delay = 5000;
  }

  // Adiciona as bolinha automaticamente
  addBullets() {
    const bulletEl = `<div class="c-slide__bullets-item"></div>`;

    this.bulletsWrapper.innerHTML = "";
    for (let i = 0; i <= this.imagens.length - 1; i++) {
      this.bulletsWrapper.innerHTML += bulletEl;
    }

    // Armazena um array com as bolinhas criadas no atributo da classe
    this.bullets = document.querySelectorAll(".c-slide__bullets-item");
  }

  // removendo atributo das imagens
  removeAttributes() {
    this.imagens.forEach((img) => img.removeAttribute("data-slide"));
    this.bullets.forEach((bullet) => bullet.removeAttribute("data-bullets"));
  }

  // adicionando atributos nas imagens
  addAttributes(index) {
    this.imagens[index].setAttribute("data-slide", "active");
    this.bullets[index].setAttribute("data-bullets", "active");
  }

  // bolinhas do slide
  slideBullets() {
    // Adiciona as bolinha no slide
    this.addBullets();

    // Percorre todas as bolinhas e ao clicar nelas aparece a imagem correspondente
    this.bullets.forEach((bullet, index) => {
      // Adiciona evento de click
      this.bullets[index].addEventListener("click", () => {
        // remove o atributo para desaparecer da tela
        this.removeAttributes();

        // ao clicar na bolinha para a transição das imagens
        clearInterval(this.slideInterval);

        // adiciona atributo para a imagem aparecer
        this.addAttributes(index);

        // reinicia a transição das imagens caso não clique em outra bolinha
        setTimeout(() => {
          this.start();
        }, 0);
      });
    });
  }

  // inicia a transição das imagens
  start() {
    // posição de inicio
    this.slideCount = 1;

    // quantidade de imagens
    this.slideSize = this.imagens.length;

    // Inicia a transição das imagens a cada 5 segundos
    this.slideInterval = setInterval(() => {
      // removendo o atributo das imagens
      this.removeAttributes();

      // adicionando o atributo na imagem correspondente ao loop
      this.addAttributes(this.slideCount);

      // incrementa +1 ao index para ir para a proxima imagem
      this.slideCount++;

      // se o index for do tamanho do slide, reinicia o index para 0 (cria um loop infinito)
      if (this.slideCount === this.slideSize) {
        this.slideCount = 0;
      }
    }, this.delay);
  }

  // inicia a classe
  init() {
    if (this.wrapper && this.imagens[0]) {
      // Inicia a primeira imagem ativa
      this.imagens[0].dataset.slide = "active";

      this.start();
      this.slideBullets();

      // Inicia a primeira bolinha ativa
      this.bullets[0].dataset.bullets = "active";
    }
  }
}
