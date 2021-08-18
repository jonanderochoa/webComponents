# MODAL

Realizamos un componente nuevo.

Creamos metodo render que contiene los estilos y etiquetas.

La etiqueta tiene un atributo __visible__ que si lo tiene se mostrara la modal y sino se ocultará.

    <jon-modal visible></jon-modal>

Recogemos el valor del atributo visible:

    get visible() {
        return this.hasAttribute("visible");
    }

    set visible(value) {
        const $wrapper = this.shadowRoot.querySelector(".wrapper");
        if(value) {
            this.setAttribute("visible", "");
            $wrapper.classList.add("visible");
        }else{
            this.removeAttribute("visible");
            $wrapper.classList.remove("visible");
        }
    }

Para que recoja el valor del atributo, se tiene que recoger en el connectedCallback(). Si hacemos el render en el constructor, no tendremos el atributo aunque lo pongamos.

    connectedCallback() {
        this.render();
    }

# SLOT

Para poder meter contenido desde el html vamos a usar los slot. Se unira el name del slot con el valor del atributo slot del html.


Para ello modificamos la template html del componente:

    <div class="${modalClass}">
        <div class="jon-modal">
            <p class="title">
                <slot name="title"></slot>
            </p>
            <p class="content">
                <slot name="content"></slot>
            </p>
            <div class="button-container">
                <button class="ok">Aceptar</button>
                <button class="cancel">Cancelar</button>
            </div>
        </div>
    </div>

En el html:

    <jon-modal visible>
        <h3 slot="title">Título de mi modal</h3>
        <p slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum autem iure expedita officia doloremque. Reprehenderit minima possimus, veritatis illo vero doloribus, facere similique consequuntur.</p>
    </jon-modal>