export default class Layout {
  static burgerButton = document.querySelector(".header__burger");
  static headerMenu = document.querySelector(".header__menu");

  static {
    this.burgerButton.onclick = () => this.showMenu();
  }

  static showMenu() {
    this.burgerButton.classList.toggle("header__burger--active");
    this.headerMenu.classList.toggle("header__menu--active");
  }
}
