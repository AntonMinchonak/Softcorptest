export default class InputFile {
  static text = document.querySelector(".input-file>span");
  static fileInput = document.querySelector(".input-file__input");

  static {
    this.createEvents();
  }

  static changeButtonText() {
    const fileName = this.fileInput.files[0].name;
    this.text.textContent = fileName
  }

  static createEvents() {
    this.fileInput.onchange = evt => this.changeButtonText();
  }
}