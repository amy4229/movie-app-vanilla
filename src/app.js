import Component from './core/component.js'

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
    console.log(this.state.fruits);
    this.el.innerHTML =/* html */ `
      <h1>Fruits</h1>
      <ul>
        ${this.state.fruits
        .filter(fruit => fruit.price < 4000)
        .map(fruit => `<li> ${fruit.name}  \t ${fruit.price}</li>`)
        .join('')
      }
      </ul>
  `
  }

}