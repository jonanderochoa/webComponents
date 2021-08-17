class NotificationComponent extends HTMLElement {

    constructor() {
        super();
        this._root = this.attachShadow({ mode: "closed" });
        this.template = document.getElementById("notificacion");
        this.notification = document.importNode(this.template.content, true);
    }

    connectedCallback() {
        // Añadimos la notificacion al shadowRoot
        this._root.appendChild(this.notification);
    }
}

window.customElements.define('jon-notificacion', NotificationComponent);