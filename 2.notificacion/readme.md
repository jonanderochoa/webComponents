# 2º componente: Notificación

Si queremos usar un DOM mas complejo, no es practico usar __createElement()__. Para ello hay varias formas de hacerlo:
- Mediante `<p></p>` e interpolacion __${form}__ para variables.
- Uso de la etiqueta __\<template>__.
- shadow-root

La etiqueta __template__ es parte de HTML 5. El problema con template es que aunque es un DOM independiente, podemos acceder a su etiqueta y hacer modificaciones con el css.

Para saber cual es el padre del elemento como DOM usaremos ownerDocument:
    
    document.querySelector("#divDestino").ownerDocument

Ficheros:
- index.html
- component.js
- styles.css

## index.html

El index contiene una nueva etiqueta __\<template>__. Los nodos hijos de la etiqueta template no pertenecen al DOM principal, pertenecen a su propio DOM.
Si intentamos buscar el id o clase de un nodo dentro de la template no lo vamos a encontrar. Para poder usar los nodos dentro de nuestro DOM tenemos que importarlo a una etiqueta a la que podamos acceder. Para importarlo, no podemos usar:

    document.getElementById("notification").children

Esto ocurre porque la etiqueta template crea un nuevo arbol DOM independiente del DOM principal. Para crear una copia debemos usar:

    let divDestino = document.getElementById("divDestino");
    const tpl = document.getElementById("notificacion");
    const copia = document.importNode(tpl.content, true);
    divDestino.apendChild(copia);

Tiene dos parametros:
- elemento que queremos importar
- Si queremos que importe sus nodos inferiores

## component.js

Shadow-root genera una barrera que evita modificar el componente con el css, seleccionar un elemento interno del mismo o sus eventos. De esta manera si introducimos un componente en una web con sus css y sus eventos, aunque las etiquetas tengan los mismos ids no se veran afectados.
AttachShadow nos da un shadowDom. Un DOM independiente y oculto.
Tiene 1 objecto con 2 parametros:
- delegatesFocus
- mode

### delegatesFocus:


### mode:

Como se crea el shadow-root: open / close

    this.attachShadow({ mode: "open" });


        
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