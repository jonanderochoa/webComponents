class Counter extends HTMLElement {
  constructor() {
    super();
    this.binding();
    this.render();
  }

  render() {
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
    this.updateInput();
  }

  minStep() {
    if(!this.step) {
      this.step = 1;
    }
  }

  increment() {
    if(this.isInvalidIncrement()){
      return;
    }
    this.minStep();
    this.value = this.value + this.step;
    this.updateInput();
  }

  decrement() {
    if(this.isInvalidDecrement()){
      return;
    }
    this.minStep();
    this.value = this.value - this.step
    this.updateInput();
  }

  isInvalidDecrement() {
    return (this.value - this.step) < this.min;
  }

  isInvalidIncrement() {
    return (this.value + this.step) > this.max;
  }

  
  get value() {
    return Number(this.getAttribute("value"));
  }

  set value(value) {
    this.setAttribute("value", value);
  }

  get step() {
    return Number(this.getAttribute("step"));
  }

  set step(value) {
    this.setAttribute("step", value);
  }

  get min() {
    return Number(this.getAttribute("min"));
  }

  set min(value) {
    this.setAttribute("min", value);
  }

  get max() {
    return Number(this.getAttribute("max"));
  }

  set max(value) {
    this.setAttribute("max", value);
  }
}

customElements.define("jon-counter", Counter);
