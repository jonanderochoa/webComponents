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