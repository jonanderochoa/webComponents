class CustomButtonComponent extends HTMLButtonElement {

    constructor() {
        super();
        this.textoAlPulsar = "Guardando...";
        this._alPulsarBoton = this._alPulsarBoton.bind(this);
    }

    _alPulsarBoton() {
        this.setAttribute("disabled", "disabled");
        this.innerHTML = this.textoAlPulsar;
        setTimeout(() => {
            this.disabled = false;
            this.innerHTML = "Guardar"
        }, 3000);
    }

    connectedCallback() {
        this.addEventListener('click', this._alPulsarBoton);
    }

    disconnectedCallback() {
        this.removeEventListener('click', this._alPulsarBoton);
    }

    attributeChangedCallback(atributo, viejoValor, nuevoValor) {
        if(atributo === 'texto'){
            this.textoAlPulsar = nuevoValor;
        }
    }

    static get observedAttributes() {
        return ['texto'];
    }
}

window.customElements.define('custom-button', CustomButtonComponent, {
    extends: "button",
});