import { LiteElement, html, css } from '@vandeurenglenn/lite'

export class AppFooter extends LiteElement {
  static styles = [
    css`
      :host {
        display: block;
        background: var(--md-sys-color-primary-color);
        color: var(--md-sys-color-on-primary-color);
        padding: 1rem;
        text-align: center;
      }
    `
  ]

  render() {
    return html` <h1>My App</h1> `
  }
}
