# Contador

Unimos los metodos increment y decrement pasandole como this el componente.
Le indicamos que cuando se pulse un boton + / - el elemento que contiene
la funcion indacada como this es el componente, no el elemento pulsado.

    binding() {
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

Creamos los elementos del componente:

    createElements() {
        this.buttonDecrement = document.createElement("button");
        this.buttonDecrement.textContent = "-";

        this.input = document.createElement("input");
        this.input.type = "text";
        this.input.readOnly = true;
        this.updateInput();

        this.buttonIncrement = document.createElement("button");
        this.buttonIncrement.textContent = "+";
    }

Conectamos los eventos a las funciones:

    connectedCallback() {
        this.buttonIncrement.addEventListener("click", this.increment);
        this.buttonDecrement.addEventListener("click", this.decrement);
    }

    increment() {
        this.value++;
        this.updateInput();
    }

    decrement() {
        this.value--;
        this.updateInput();
    }

