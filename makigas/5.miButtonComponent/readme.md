# 5º miButtonComponent

Hasta ahora hemos creado componentes desde 0. A esto se le conoce como componentes autonomos. Estos tienen una serie de inconvenientes:
- Hay que adaptarlo para que un formulario pueda recojer el valor ya que esta en su shadowroot. 
- Tenemos que tener en cuenta la accesibilidad a la hora de crear estos componentes.

Otra forma de crear componentes es usar componentes existente y modificarlos como haremos en este ejemplo. A continuacion vamos a crear un boton que cuando se pulse ponga un mensaje determinado y se desactive.

Podriamos hacerlos desde js. Controlando el evento click y cambiando el texto y deshabilitando el boton pero si se repite en muchos sitios es codigo repetido, etc.

## Para hacerlo:

En el fichero componente.js creamos una clase que extienda de HTMLButtonElement.

En el constructor ponemos un texto por defecto cuando se pulsa el boton por si no ponemos la etiqueta __texto__. Ademas hacemos un bind del boton al metodo _alPulsarBoton().

    constructor() {
        super();
        this.textoAlPulsar = "Guardando...";
        this._alPulsarBoton = this._alPulsarBoton.bind(this);
    }

El metodo principal lo que hace es Añadir el texto que queremos o el por defecto y deshabilitar el propio boton.

    _alPulsarBoton() {
        this.setAttribute("disabled", "disabled");
        this.innerHTML = this.textoAlPulsar;
    }

Usamos los metodos connectedCallback() y disconnectedCallback() para conectar y desconectar el evento click con el metodo _alPulsarBoton.

    connectedCallback() {
        this.addEventListener('click', this._alPulsarBoton);
    }

    disconnectedCallback() {
        this.removeEventListener('click', this._alPulsarBoton);
    }

Creamos un observador del atributo __texto__. Cuando se cambie guardara el texto introducido como parametro y lo usara como texto del boton al hacer click.

    attributeChangedCallback(atributo, viejoValor, nuevoValor) {
        if(atributo === 'texto'){
            this.textoAlPulsar = nuevoValor;
        }
    }

    static get observedAttributes() {
        return ['texto'];
    }

Ahora definimos el componente. Tiene 3 parametros:
- nombre de la etiqueta del componente
- Clase a la que llama
- Objeto que contiene extends -> Tipo de objeto que sera.

Define:

    window.customElements.define('custom-button', CustomButtonComponent, {
        extends: "button",
    });

## HTML

Mediante el uso de is le decimos el tipo de componente que es. Al poner el atributo texto, el contenido sera lo que se muestre al clickar el boton.

    <body>
        <form>
            <button is="custom-button" texto="Enviando...">Guardar Cambio</button>
        </form>
        <script src="component.js"></script>
    </body>

Este metodo no funciona bien en safari y otros navegadores. Pero hay formas de solucionarlos como polyfills