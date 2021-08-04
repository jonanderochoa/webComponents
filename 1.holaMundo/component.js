class HelloWorldComponent extends HTMLElement {

    constructor(){
        super();
        this.saludo = "Hola Mundo";
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