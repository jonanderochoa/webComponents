class NotificationComponent extends HTMLElement {

    constructor() {
        super();
 
        this.attachShadow({ mode: "open" });

        // Traemos la template
        this.template = document.getElementById("notificacion");
        // Copiamos la template a la variable notificacion
        this.notification = document.importNode(this.template.content, true);
    }

    attributeChangedCallback(atributo, viejoValor, nuevoValor) {

    }

    static get observedAttributes() {
        return [''];
    }

    connectedCallback() {
        console.log("Notificacion connected");
        // Añadimos la notificacion al shadowRoot
        this.shadowRoot.appendChild(this.notification);
    }

    disconnectedCallback() {
        console.log("Notificacion disconnected");
    }
}

window.customElements.define('jon-notificacion', NotificationComponent);