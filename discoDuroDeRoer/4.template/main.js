class Counter extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.binding();
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .jon-counter #input {
          border-radius: 10px;
          text-align:center;
        }
      </style>
      <div class="jon-counter">
        <button id="decrement">-</button>
        <input id="input" type="text" readOnly/>
        <button id="increment">+</button>
      </div>
    `;
    this.buttonDecrement = this.shadowRoot.querySelector("#decrement");
    this.inputText = this.shadowRoot.querySelector("#input");
    this.buttonIncrement = this.shadowRoot.querySelector("#increment");
  }

  binding() {
    // Unimos los metodos increment y decrement pasandole como this el componente
    // Le indicamos que cuando se pulse un boton + / - el elemento que contiene
    // la funcion indacada como this es el componente, no el elemento pulsado.
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  updateInput() {
    this.inputText.value = this.value;
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
