import Component from '../core/component.js';
import messageStore from "../stores/message.js";

export default class Title extends Component {
  constructor() {
    super({
      tagName: 'h1'
    })
    messageStore.subscribe('message', () => {
      this.render();
    })
  }

  render() {
    this.el.textContent = `TItle: ${messageStore.state.message}`;

  }
}