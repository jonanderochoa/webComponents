# MODAL ENETS

Dividimos el codigo js en 2 ficheros:
- main.js               contiene el código general de la página.
- modalComponent.js     código del componente de la modal.

Añadimos un boton que lanza la modal. Para ello añadimos un evento click al boton que le cambia la propiedad visible de la modal a true.

__html__

    <button id="open">Mostrar modal</button>

__main.js__

    window.onload = init;

    // Funcion init
    function init() {
        const boton = document.querySelector("#open");
        const modal = document.querySelector("jon-modal");

        boton.addEventListener('click', function() {
            modal.visible = true;
        });
    }

EVENTOS DE LA MODAL

Creamos un metodo que controla los eventos de los botones propios de la modal:

    attachEventHandlers() {
        const buttonOk = this.shadowRoot.querySelector(".ok");
        const buttonCancel = this.shadowRoot.querySelector(".cancel");

        buttonOk.addEventListener('click', () => this.visible = false );
        buttonCancel.addEventListener('click', () => this.visible = false );
    }

Nota importante. Si a la hora de añadir la funcion al evento de los botones, usamos function() {} en lugar de () => {} el this interno sera el del boton, no el de la modal. Nosotros necesitamos la modal para poder acceder a la propiedad visibility.

Otra opcion habria sido esta:

    attachEventHandlers() {
        const buttonOk = this.shadowRoot.querySelector(".ok");
        const buttonCancel = this.shadowRoot.querySelector(".cancel");
        const self = this;
        buttonOk.addEventListener('click', function() {
            self.visible = false 
        });
        buttonCancel.addEventListener('click', function() {
            self.visible = false 
        });
    }

En este caso recogemos el valor de la modal en self y cuando se sustituye this por el boton, seguimos teniedo la modal en self. Aunqe es mas limpia la primera manera.

DISPATCHEVENT

Usando:

    this.dispatchEvent(new CustomEvent('ok'));
    this.dispatchEvent(new CustomEvent('cancel'));

Conseguimos crear los eventos __'ok'__ y __'cancel'__ que podemos llamar desde el main.js igual que el evento __'click'__ de un boton.

__main.js__

Añadimos un listener que muestre un log cuando se pulse alguno de los botones de la modal.

    window.onload = init;

    // Funcion init
    function init() {
        const boton = document.querySelector("#open");
        const modal = document.querySelector("jon-modal");

        boton.addEventListener('click', function() {
            modal.visible = true;
        });

        modal.addEventListener('ok', function() {
            console.log("Pulsado OK");
        });
        
        modal.addEventListener('cancel', function() {
            console.log("Pulsado CANCEL");
        });
    }
