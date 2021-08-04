class HelloWorldComponent extends HTMLElement {

    constructor(){
        super();
        this.saludo = "Hola Mundo, como estas";
    }

    // Se dispara cuando se cambia un atributo
    // Se dispara antes del connectedCallback
    attributeChangedCallback(atributo, viejoValor, nuevoValor) {
        console.log(`El atributo ${atributo} ha cambiado de ${viejoValor} a ${nuevoValor}`);
        if(atributo === 'nombre') {
            this.saludo = `Hola Mundo, como estas ${nuevoValor}`;
        }
    }

    // Lista de atributos que queremos observar
    static get observedAttributes() {
        return ['nombre'];
    }

    // Se ejecuta cuando se añade el componente a un DOM
    connectedCallback() {
        console.log("Añadido al DOM");

        let $saludo = document.createElement("strong");
        $saludo.innerHTML = this.saludo;
        this.appendChild($saludo);
    }

    // Se ejecuta cuando se desconecta el componente del DOM
    disconnectedCallback() {
        console.log("Eliminado del DOM")
    }
}

// Definimos la clase que lanzara la etiqueta <hello-world>
// Las etiquetas siempre tienen que ser al menos 2 palabras separadas
// por guion. Acuerdo con w3c
window.customElements.define('hello-world', HelloWorldComponent);