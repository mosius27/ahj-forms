export default class Popover {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
      <div class="container_wrapper">
        <button class="container_button">
          Click to toggle popover
        </button>
        <div class="container_popover">
          <div class="popover_title">
            Заголовок
          </div>
          <div class="popover_text">
            Какой-то текст - подсказка - наводка.
          </div>
        </div>
      </div>`;
  }

  static get popoverSelector() {
    return '.container_popover';
  }

  static get buttonSelector() {
    return '.container_button';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const button = this.parentEl.querySelector(this.constructor.buttonSelector);
    button.addEventListener('click', (e) => this.onButton(e));
  }

  onButton(evt) {
    evt.preventDefault();
    const popover = this.parentEl.querySelector(this.constructor.popoverSelector);
    if (popover.classList.contains('active')) {
      popover.classList.remove('active');
    } else {
      popover.classList.add('active');
    }
  }
}
