class HelloWorld extends HTMLElement {

    constructor() {
        super();

        let shadowRoot = this.attachShadow({ mode: 'open' });
        const span = document.createElement('span');
        span.textContent = 'Hello World';
        shadowRoot.appendChild(span);
    }

    connectedCallback() {
        this.addEventListener('click', () => {
            alert('Hola mundo');
        }); 
    }

}

customElements.define('hello-world', HelloWorld);