export default class InputRange {
  static customInputs = document.querySelectorAll(".custom-select__title");
  static selectsClass = "custom-select";
  static titleClass = this.selectsClass + "__title";

  static {
    this.createEvents();
  }

  static showPopup(evt) {
    if (!evt.pointerType) return;
    const targetsTitleParent = evt.target.closest("." + this.titleClass);
    const targetIsTitle = evt.target.classList.contains(this.titleClass);
    const isPopupOpened = evt.target.closest("." + this.selectsClass)?.hasAttribute("open");

    this.customInputs.forEach(el => {
      if (targetsTitleParent && !targetIsTitle && !isPopupOpened) {
        el.closest(".custom-select").setAttribute("open", "true");
      } else if (!targetIsTitle) {
        el.closest(".custom-select").removeAttribute("open");
      }
    });
  }

  static createEvents() {
    window.onclick = evt => this.showPopup(evt);
  }
}
