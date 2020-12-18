import Form from "./script/Form";
import MobileMenu from "./script/MobileMenu";
import Modal from "./script/Modal";
import Slide from "./script/Slide";

// Menu Mobile
const mobileMenu = new MobileMenu("[data-menu]", "[data-menu-list]");
mobileMenu.init();

// Slide
const slide = new Slide(
  ".c-slide",
  ".c-slide__imagens img",
  ".c-slide__bullets-item",
  ".c-slide__arrow-next",
  ".c-slide__arrow-prev"
);
slide.init();

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
