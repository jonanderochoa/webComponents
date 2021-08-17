class Counter extends HTMLElement {
  constructor() {
    super();

    this.binding();

    this.value = 0;
    let shadowRoot = this.attachShadow({ mode: "open" });
    this.createElements();
    shadowRoot.appendChild(this.buttonDecrement);
    shadowRoot.appendChild(this.input);
    shadowRoot.appendChild(this.buttonIncrement);
  }

  binding() {
    // Unimos los metodos increment y decrement pasandole como this el componente
    // Le indicamos que cuando se pulse un boton + / - el elemento que contiene
    // la funcion indacada como this es el componente, no el elemento pulsado.
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  createElements() {
    this.buttonDecrement = document.createElement("button");
    this.buttonDecrement.textContent = "-";

    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.readOnly = true;
    this.updateInput();

    this.buttonIncrement = document.createElement("button");
    this.buttonIncrement.textContent = "+";
  }

  updateInput() {
    this.input.value = this.value;
  }

  connectedCallback() {
    this.buttonIncrement.addEventListener("click", this.increment);
    this.buttonDecrement.addEventListener("click", this.decrement);
  }

  increment() {
    this.value++;
    this.updateInput();
  }

  decrement() {
    this.value--;
    this.updateInput();
  }
}

customElements.define("jon-counter", Counter);
