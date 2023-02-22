import Component from './core/component.js'
import Header from './components/header.js'

export default class App extends Component {
  render() {
    const routerView = document.createElement('router-view');
    this.el.append(
      new Header().el,
      routerView
    )
  }
}