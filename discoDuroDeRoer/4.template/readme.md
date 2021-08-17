# Template

Sustituimos los elementos creados mediante código por un template:


__ANTES:__

    render() {
        let shadowRoot = this.attachShadow({ mode: "open" });
        this.createElements();
        shadowRoot.appendChild(this.buttonDecrement);
        shadowRoot.appendChild(this.input);
        shadowRoot.appendChild(this.buttonIncrement);
    }

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

__DESPUES:__

    render() {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
        <style>
            .jon-counter #input {
            border-radius: 10px;
            text-align:center;
            }
        </style>
        <div class="jon-counter">
            <button id="decrement">-</button>
            <input id="input" type="text" readOnly/>
            <button id="increment">+</button>
        </div>
        `;
        this.buttonDecrement = this.shadowRoot.querySelector("#decrement");
        this.inputText = this.shadowRoot.querySelector("#input");
        this.buttonIncrement = this.shadowRoot.querySelector("#increment");
    }