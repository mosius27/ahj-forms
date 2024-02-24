import Popover from './popover';

beforeAll(() => {
  document.body.innerHTML = '<div class="container"></div>';
});

test('should active class after click', () => {
  const container = document.querySelector('.container');
  const widget = new Popover(container);
  widget.bindToDOM();
  const button = document.querySelector('.container_button');
  const popOver = document.querySelector('.container_popover');
  button.click();
  expect(popOver.classList.contains('active')).toBeTruthy();
});

test('should non-active class after double-click', () => {
  const container = document.querySelector('.container');
  const widget = new Popover(container);
  widget.bindToDOM();
  const button = document.querySelector('.container_button');
  const popOver = document.querySelector('.container_popover');
  button.click();
  button.click();
  expect(popOver.classList.contains('active')).toBeFalsy();
});
