import Popover from './popover/popover';

const container = document.querySelector('.container');
const widget = new Popover(container);
widget.bindToDOM();
