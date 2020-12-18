export default class Message {
  constructor(wrapper, content, type) {
    this.wrapper = document.querySelector(wrapper);
    this.content = this.wrapper.querySelector(content);
    this.type = type;
  }

  showMessage(message) {
    if (this.type === "error") this.wrapper.dataset.message = "error";
    else if (this.type === "success") this.wrapper.dataset.message = "success";

    this.content.innerHTML = message;
  }

  closeMessage() {
    this.wrapper.dataset.message = "closed";
  }
}
