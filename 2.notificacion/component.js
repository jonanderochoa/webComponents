class NotificationComponent extends HTMLElement {

    constructor() {
        super();

        /*
        Shadow-root genera una barrera que evita modificar el componente con el css,
        seleccionar un elemento interno del mismo o sus eventos.
        AttachShadow nos da un shadowRoot como un nuevo DOM. Tiene 2 parametros:
        - 
        - mode: open / close
        */
       this.attachShadow
    }

    attributeChangedCallback(atributo, viejoValor, nuevoValor) {

    }

    static get observedAttributes() {
        return [''];
    }

    connectedCallback() {

    }

    disconnectedCallback() {

    }
}

window.customElements.define('jon-notificacion', NotificationComponent);