import Componenet from './core/component.js'

export default class App extends Componenet {
  constructor() {
    super({ tagName: 'h1' });
  }

  render() {
    this.el.textContent = 'Hello, world!';
  }
}