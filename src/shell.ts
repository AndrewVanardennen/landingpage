import { customElement, html, LiteElement, property } from '@vandeurenglenn/lite'
import '@vandeurenglenn/lite-elements/theme.js'
import './elements/content.js'
import './elements/footer.js'
import './elements/header.js'

declare global {
  interface HTMLElementTagNameMap {
    'app-shell': AppShell
  }
}

@customElement('app-shell')
export class AppShell extends LiteElement {
  @property({ type: String }) accessor selected = 'home'

  render() {
    return html`
      <custom-theme
        load-fonts="false"
        load-symbols="false"></custom-theme>
      <app-header .selected=${this.selected}></app-header>
      <app-content .selected=${this.selected}></app-content>
      <app-footer></app-footer>
    `
  }
}
