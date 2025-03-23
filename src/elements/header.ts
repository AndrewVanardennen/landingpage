import { css, customElement, html, LiteElement } from '@vandeurenglenn/lite'
import '@vandeurenglenn/lite-elements/tabs.js'
import '@vandeurenglenn/lite-elements/tab.js'

@customElement('app-header')
export class AppHeader extends LiteElement {
  static styles = [
    css`
      :host {
        display: block;
        background: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        padding: 1rem;
        text-align: center;
        position: relative;
      }
    `
  ]

  $ontabSelected(e: CustomEvent) {
    const tab = e.detail
    console.log('Tab selected', tab)
    document.querySelector('app-shell').selected = tab.dataset.route
  }

  render() {
    return html`
      <h1>My App</h1>
      <custom-tabs
        round
        @selected=${(e: CustomEvent) => this.$ontabSelected(e)}>
        <custom-tab data-route="home">Home</custom-tab>
        <custom-tab data-route="about">About</custom-tab>
        <custom-tab data-route="contact">Contact</custom-tab>
      </custom-tabs>
    `
  }
}
