export default class Slide {
  constructor(wrapper, imagens, bullets, next, prev) {
    // slide wrapper
    this.wrapper = document.querySelector(wrapper);

    // images
    this.imagens = this.wrapper.querySelectorAll(imagens);

    // bullets
    this.bullets = this.wrapper.querySelectorAll(bullets);

    // arrows
    this.next = this.wrapper.querySelector(next);
    this.prev = this.wrapper.querySelector(prev);

    // bind
    this.slideBullets = this.slideBullets.bind(this);

    // time delay
    this.delay = 5000;
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
      console.log("test");
    }
  }
}
