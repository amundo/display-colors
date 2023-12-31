import { extractColors } from "./extract-colors.js"

export class DisplayColors extends HTMLElement {
  #colors = []

  constructor() {
    super()
    this.innerHTML = `<table></table>`
  }

  static get observedAttributes() {
    return ["src"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "src" && oldValue !== newValue) {
      this.fetchCSS(newValue)
    }
  }

  async fetchCSS(src) {
    try {
      const response = await fetch(src)
      if (!response.ok) {
        throw new Error(
          `Failed to fetch CSS file: ${response.status} ${response.statusText}`,
        )
      }
      const cssContent = await response.text()
      let style = document.createElement("style")
      style.textContent = cssContent
      document.head.append(style)
      this.data = await this.parseCSS(cssContent)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  set data(colors) {
    console.table(colors)
    this.#colors = colors
    this.render()
  }

  get data() {
    return this.#colors
  }

  parseCSS(cssContent) {
    return extractColors(cssContent)
  }

  render() {
    this.querySelector("table").innerHTML = ``

    let rows = this.#colors
      .reduce((fragment, { variable, value }) => {
        let tr = document.createElement("tr")
        tr.innerHTML = `
          <th><code>--${variable}</code></th>
          <td class="swatch" style="background-color:var(--${variable});"></td>
          <td><code>${value}</code></td>
        `
        fragment.append(tr)
        return fragment
      }, document.createDocumentFragment())
    this.querySelector("table").append(rows)
  }
}

customElements.define("display-colors", DisplayColors)
