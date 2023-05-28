class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="app-header">
        <a class="app-logo" href="/">
          <img src="../images/logo.svg" alt="Logo do site">
          <h1>aqua</h1>
        </a>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="services.html">Serviços</a>
          </li>
          <li>
            <a href="contact.html">Contato</a>
          </li>
          <li>
            <a href="localization.html">Localização</a>
          </li>
        </ul>
      </header>
    `;
  }
}

customElements.define("header-component", Header);
