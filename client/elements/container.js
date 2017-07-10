const template = `
  <div>
    <slot></slot>
  </div>
`

customElements.define('user-image', class extends HTMLElement {
  constructor() {
    super()

    const root = this.attachShadow({ mode: 'open' })
    root.innerHTML = template
  }

  connectedCallback() {}
})
