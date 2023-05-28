class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>&copy; 2023 Aqua. Todos os direitos reservados.</p>
      </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
