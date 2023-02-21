import Component from './core/component.js'
import FruitItem from './components/fruitItem.js';

export default class App extends Component {
  constructor() {
    super({
      state: {
        fruits: [
          { name: 'Apple', price: 1000 },
          { name: 'Cherry', price: 2000 },
          { name: 'Strawberry', price: 3000 },
          { name: 'Watermelon', price: 4000 },
        ]
      }
    });
  }

  render() {
    this.el.innerHTML =/* html */ `
      <h1>Fruits</h1>
      <ul>
        
      </ul>
  `
    const ulEl = this.el.querySelector('ul');
    ulEl.append(...
      this.state.fruits
        .filter(f => f.price < 4000)
        .map(f => new FruitItem({
          props: {
            name: f.name,
            price: f.price
          }
        }).el)
    );
  }

}