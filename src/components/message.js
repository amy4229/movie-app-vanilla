import Component from '../core/component.js'
import messageStore from '../stores/message.js'

export default class Message extends Component {
  constructor() {
    super()
    messageStore.subscribe('message', () => {
      this.render();
    })
  }
  render() {
    this.el.innerHTML =  /*html */ `
      <h2>${messageStore.state.message}</h2>
    `
  }
}
