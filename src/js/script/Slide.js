export default class Slide {
  constructor(wrapper, imagens, bullets) {
    this.wrapper = document.querySelector(wrapper);
    this.imagens = document.querySelectorAll(imagens);
    this.bullets = this.wrapper.querySelectorAll(bullets);

    this.nextPrev = this.nextPrev.bind(this);
  }

  nextPrev() {
    // bullets
    this.bullets.forEach((bullet, index) => {
      this.bullets[index].addEventListener("click", () => {
        // this.imagens[index].setAttribute("data-slide", "active");
        this.slideCount = index;
      });
    });
  }

  start() {
    this.slideCount = 1;
    let slideSize = this.imagens.length;

    this.imagens[0].setAttribute("data-slide", "active");

    setInterval(() => {
      this.imagens.forEach((img) => img.removeAttribute("data-slide"));

      this.imagens[this.slideCount].setAttribute("data-slide", "active");
      console.log(this.slideCount, slideSize);

      this.slideCount += 1;

      if (this.slideCount === slideSize) {
        this.slideCount = 0;
      }
    }, 5000);

    // bullets
    this.nextPrev();
  }

  init() {
    if (this.wrapper && this.imagens[0]) {
      this.start();
    }
  }
}
