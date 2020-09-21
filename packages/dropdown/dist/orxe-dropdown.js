var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement, property } from 'lit-element';
import styles from './dropdown-css';
let OrxeDropdown = class OrxeDropdown extends LitElement {
    constructor() {
        super();
        this.options = ['Option1', 'Option2', 'Option3'];
        this.title = 'Label';
        this.defaultValue = 'Options';
        this.value = 'none';
    }
    render() {
        return html `
    <div data-testid="default" class="dropdown">
      <h2>Default State</h2>
      <div data-testid="default" class="Default-borderLabel">
        <label aria-label="selected" >${this.title}</label>
        <select  required>
          <option  aria-selected="true" value="" disabled selected hidden>${this.defaultValue}</option>
          ${this.options.map(option => html `<option aria-selected="true">${option}</option>`)}
        </select>
      </div>
      <h2>Active State</h2>
      <div class="borderLabel">
        <label  aria-label="selected">${this.title}</label>
        <select  required >
          <option aria-selected="true" value="" disabled selected hidden>${this.defaultValue}</option>
          ${this.options.map(option => html `<option aria-selected="true">${option}</option>`)}
        </select>
      </div>
      <h2>Error State</h2>
      <div class="Error-borderLabel">
        <label  aria-label="selected">${this.title}</label>
        <select   required>
          <option aria-selected="true" value="" disabled selected hidden>${this.defaultValue}</option>
          ${this.options.map(option => html `<option aria-selected="true">${option}</option>`)}
        </select>
      </div>
      <h2>Disabled State</h2>
      <div class="Disabled-borderLabel">
        <label  aria-label="selected">${this.title}</label>
        <select  required>
          <option aria-selected="true" value="" disabled selected hidden>${this.defaultValue}</option>
          ${this.options.map((option) => html `<option aria-selected="true">${option}</option>`)}
        </select>
      </div>
    </div>
   `;
    }
};
OrxeDropdown.styles = styles;
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], OrxeDropdown.prototype, "options", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], OrxeDropdown.prototype, "title", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], OrxeDropdown.prototype, "defaultValue", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], OrxeDropdown.prototype, "value", void 0);
OrxeDropdown = __decorate([
    customElement('orxe-dropdown'),
    __metadata("design:paramtypes", [])
], OrxeDropdown);
export default OrxeDropdown;
