import { css, customElement, html, LiteElement, property } from '@vandeurenglenn/lite'

@customElement('app-content')
export class AppContent extends LiteElement {
  @property({ type: String }) accessor title = 'My App'

  @property({ type: String }) accessor selected = 'home'

  static styles = [
    css`
      :host {
        display: block;
        background: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        padding: 1rem;
        text-align: center;
      }
    `
  ]

  renderContent() {
    switch (this.selected) {
      case 'home':
        return html`<p>Welcome to the home page</p>
        <p> So this is it? </p>`
      case 'about':
        return html`<p>Learn more about us</p>`
      case 'contact':
        return html`<p>Contact us</p>`
      default:
        return html`<p>Page not found</p>`
    }
  }

  render() {
    return html` <h2>${this.selected}</h2>

      ${this.renderContent()}`
  }
}
