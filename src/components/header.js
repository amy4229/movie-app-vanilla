import Component from '../core/component.js';

export default class Header extends Component {
  constructor() {
    super({
      tagName: "header",
    });
  }

  render() {
    this.el.innerHTML = /* html */`
      <a href="#/">Home</a>
      <a href="#/about">About!</a>
    `
  }
}