# 1º componente básico Hola mundo
En este primer componente tenemos dos ficheros:
- index.html
- component.js

## index.html

El index.html contiene la llamada al script que crea el componente.

    <script src="component.js"></script>

Ademas hace uso de la etiqueta del componente 

    <hello-world nombre="jon ander ochoa"></hello-world>

### component.js

Creamos la clase que hereda de HTMLElement.

    class HelloWorldComponent extends HTMLElement {

 Definimos la clase que lanzara la etiqueta **hello-world**. Las etiquetas siempre tienen que ser al menos 2 palabras separadas por guion. Acuerdo con w3c, ellos no crearan ninguna etiqueta con mas de una palabra.

        window.customElements.define('hello-world', HelloWorldComponent);

### Veamos la clase HelloWorldComponent

Tiene varios metodos:
    
    1º constructor()
    2º observedAttributes()
    3º attributeChangedCallback()
    4º connectedCallback()
    5º disconnectedCallback()

---
**1º constructor()**
Metodo inicial de la clase.

---
**2º observedAttributes()**
Lista de atributos que queremos observar.

---
**3º attributeChangedCallback()**
Se dispara cuando se cambia un atributo del listado de atributos a observar.
Se dispara antes del __connectedCallback__

El metodo tiene 3 parametros:

    attributeChangedCallback(atributo, viejoValor, nuevoValor) {

---
**4º connectedCallback()**
Se ejecuta cuando se añade el componente a un DOM.

---
**5º disconnectedCallback()**
Se ejecuta cuando se desconecta el componente del DOM.

____
#FUNCIONAMIENTO:

El html contiene el script que contiene el componente.
Al usar la etiqueta __hello-world__ se ejecuta la clase HelloWorldComponent gracias a la definicion de la etiqueta:

    window.customElements.define('hello-world', HelloWorldComponent);

Al ejecutarse la clase HelloWorldComponent lo primero que se ejecuta es el constructor que crea unas propiedades:

    this.saludo = "Hola Mundo, como estas";
    this.pintado = false;

Le indicamos que queremos que se observe cambios en el atributo __nombre__

    static get observedAttributes() {
        return ['nombre'];
    }

Cuando se produzca un cambio se disparara el metodo __attributeChangedCallback()__

Si el atributo es nombre sustituira el valor por defecto de la propiedad __this.saludo__ por el nuevo valor y lo añadira al html:

    this.innerHTML = this.saludo;