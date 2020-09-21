import { html, customElement, LitElement, property } from 'lit-element';
import styles from './dropdown-css';


@customElement('orxe-dropdown')
export default class OrxeDropdown extends LitElement {
  @property({ type: String, reflect: true})
  options = ['Option1', 'Option2', 'Option3'];

  @property({ type: String, reflect: true})
  title: string = 'Label';

  @property({ type: String, reflect: true})
  defaultValue: string = 'Options';

  @property({ type: String, reflect: true})
  value: string = 'none';

  constructor() {
    super();
  }

  render() {
    return html`
    <div data-testid="default" class="dropdown">
      <h2>Default State</h2>
      <div data-testid="default" class="Default-borderLabel">
        <label aria-label="selected" >${this.title}</label>
        <select  required>
          <option  aria-selected="true" value="" disabled selected hidden>${this.defaultValue}</option>
          ${this.options.map(option => html`<option aria-selected="true">${option}</option>`)}
        </select>
      </div>
      <h2>Active State</h2>
      <div class="borderLabel">
        <label  aria-label="selected">${this.title}</label>
        <select  required >
          <option aria-selected="true" value="" disabled selected hidden>${this.defaultValue}</option>
          ${this.options.map(option => html`<option aria-selected="true">${option}</option>`)}
        </select>
      </div>
      <h2>Error State</h2>
      <div class="Error-borderLabel">
        <label  aria-label="selected">${this.title}</label>
        <select   required>
          <option aria-selected="true" value="" disabled selected hidden>${this.defaultValue}</option>
          ${this.options.map(option => html`<option aria-selected="true">${option}</option>`)}
        </select>
      </div>
      <h2>Disabled State</h2>
      <div class="Disabled-borderLabel">
        <label  aria-label="selected">${this.title}</label>
        <select  required>
          <option aria-selected="true" value="" disabled selected hidden>${this.defaultValue}</option>
          ${this.options.map((option) => html`<option aria-selected="true">${option}</option>`)}
        </select>
      </div>
    </div>
   `;
  }
  static styles = styles;
}

