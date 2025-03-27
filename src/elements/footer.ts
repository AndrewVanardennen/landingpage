import { LiteElement, html, css, customElement } from '@vandeurenglenn/lite'


@customElement('app-footer')
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
    return html`
    
    <p> Footer </p> `
  }
}
