import Component from '../core/component.js'

export default class FruitItem extends Component {
  constructor(payload) {
    super({
      tagName: 'li'
      , props: payload.props
    });
  }
  render() {
    const { name, price } = this.props;
    this.el.innerHTML = `
      <span>${name}</span>
      <span>${price}</span>
    `
    this.el.addEventListener("click", () => {
      console.log(name, price);
    });

  }


}