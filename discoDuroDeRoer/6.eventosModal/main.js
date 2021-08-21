// Cuando cargue la pagina que cargue init
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

