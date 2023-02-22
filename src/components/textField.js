import Component from '../core/component.js'
import messageStore from '../stores/message.js'

export default class TextField extends Component {
  render() {
    this.el.innerHTML = /*html */`
      <input value="${messageStore.state.message}"/>
    `;

    const inputEl = this.el.querySelector('input');
    inputEl.addEventListener('input', () => {
      messageStore.state.message = inputEl.value;
    })
  }
}
