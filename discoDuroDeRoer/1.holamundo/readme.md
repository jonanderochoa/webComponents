# Hello-Wold Component

Un shadowRoot genera un DOM propio.

Creamos un shadowRoot con:

    let shadowRoot = this.attachShadow({ mode: 'open' });

Al estar en mode: 'open' podemos acceder al contenido de su DOM