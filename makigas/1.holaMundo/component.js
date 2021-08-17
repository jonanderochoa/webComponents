class HelloWorldComponent extends HTMLElement {

    constructor(){
        super();
        this.saludo = "Hola Mundo, como estas";
        this.pintado = false;
    }

    // Se dispara cuando se cambia un atributo
    // Se dispara antes del connectedCallback
    attributeChangedCallback(atributo, viejoValor, nuevoValor) {
        console.log(`El atributo ${atributo} ha cambiado de ${viejoValor} a ${nuevoValor}`);
        if(atributo === 'nombre') {
            this.saludo = `Hola Mundo, como estas ${nuevoValor}`;
        }
        if(this.pintado) {
            this.innerHTML = this.saludo;
        }
    }

    // Lista de atributos que queremos observar
    static get observedAttributes() {
        return ['nombre'];
    }

    // Se ejecuta cuando se añade el componente a un DOM
    connectedCallback() {
        console.log("Añadido al DOM");
        this.pintado = true;
        this.innerHTML = this.saludo;
    }

    // Se ejecuta cuando se desconecta el componente del DOM
    disconnectedCallback() {
        console.log("Eliminado del DOM");
        this.pintado = false;
    }
}

// Definimos la clase que lanzara la etiqueta <hello-world>
// Las etiquetas siempre tienen que ser al menos 2 palabras separadas
// por guion. Acuerdo con w3c
window.customElements.define('hello-world', HelloWorldComponent);