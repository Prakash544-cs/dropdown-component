import { LitElement } from 'lit-element';
export default class OrxeDropdown extends LitElement {
    options: string[];
    title: string;
    defaultValue: string;
    value: string;
    constructor();
    render(): import("lit-element").TemplateResult;
    static styles: import("lit-element").CSSResult;
}
