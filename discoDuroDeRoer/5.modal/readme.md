# MODAL

Realizamos un componente nuevo.

Creamos metodo render que contiene los estilos y etiquetas.

La etiqueta tiene un atributo __visible__ que si lo tiene se mostrara la modal y sino se ocultara.

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

