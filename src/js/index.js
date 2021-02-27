import Form from "./script/Form";
import MobileMenu from "./script/MobileMenu";
import Modal from "./script/Modal";
import Scroll from "./script/Scroll";
import Slide from "./script/Slide";

// Menu Mobile
const mobileMenu = new MobileMenu("[data-menu]", "[data-menu-list]");
mobileMenu.init();

// Slide
const slideEl = document.querySelector(".c-slide");

if (slideEl) {
  const slide = new Slide(
    ".c-slide",
    ".c-slide__imagens img",
    ".c-slide__bullets",
    ".c-slide__arrow-next",
    ".c-slide__arrow-prev"
  );
  slide.init();
}

// Modal
const modal = new Modal(
  ".c-modal",
  ".c-modal__body",
  ".c-modal__title",
  ".c-modal__close"
);
modal.init();

// Formulario
const contato = new Form();
contato.init();

// Scroll top
const scrollTop = new Scroll(".c-btn-scrollTop");
scrollTop.init();
