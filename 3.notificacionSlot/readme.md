# 3º componente: Notificación Slot

Dentro de la template, podemos susutituir los contenidos por etiquetas slot con el monbre con el que queremos sustituirlo.

Ej:

    <slot name="titulo">

La etiqueta se une dentro del componente con el atributo slot:

    <jon-notificacion>
        <span slot="titulo">Error de guardado</span>
    </jon-notificacion>

Veamos como queda la template:

    <template id="notificacion">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="styles.css"/>
            <p class="icon">
                <i class="fas fa-exclamation-circle"></i>
            </p>
            <div class="body">
                <p><strong class="title"><slot name="titulo"></slot></strong></p>
                <slot name="contenido"></slot>
                <slot name="boton"></slot>
            </div>
        </div>
    </template>

Y la etiqueta del componente:

    <jon-notificacion>
        <span slot="titulo">Error de guardado</span>
        <p slot="contenido">Tenemos problemas para comunicarnos con <strong>los servidores</strong></p>
        <button slot="boton" class="action">Intenta otra vez</button>
    </jon-notificacion>