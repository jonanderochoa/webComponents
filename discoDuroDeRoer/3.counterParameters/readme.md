# Contador con aprametros

Vamos a continuar con el ejercicio anterior. Para ello añadiremos varios parametros a la etiqueta:

    <jon-counter value="5" step="5" min="0" max="100"></jon-counter>

Para recoger y modificar estos valores usaremos los setters y getters:

    get value() {
        return this.getAttribute("value");
    }

    set value(value) {
        this.setAttribute("value", value);
    }

    get step() {
        return this.getAttribute("step");
    }

    set step(value) {
        this.setAttribute("step", value);
    }

    get min() {
        return this.getAttribute("min");
    }

    set min(value) {
        this.setAttribute("min", value);
    }

    get max() {
        return this.getAttribute("max");
    }

    set max(value) {
        this.setAttribute("max", value);
    }

Los valores que introduzcamos por el html no se recogen en el constructor(), por lo que se muestra el valor 0 inicialmente aunque ya tenga el valor inicial. esto lo podemos ver porque si iniciamos en 5 y tenemos un step de uno, al incrementar pasará de 0 a 6.

Para hacer que se cargue el valor inicial:

    connectedCallback() {
        this.buttonIncrement.addEventListener("click", this.increment);
        this.buttonDecrement.addEventListener("click", this.decrement);
        this.updateInput();
    }

Ponemos this.updateInput(); en el connectedCallback().