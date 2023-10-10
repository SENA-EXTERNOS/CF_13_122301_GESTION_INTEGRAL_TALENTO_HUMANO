<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Trazabilidad del servicio

    .row.justify-content-center
      .col-lg-4.justify-content-center
        figure
          img(src='@/assets/curso/temas/tema3/t3-img1.png', alt='Texto que describa la imagen')
      .col-lg-8.col-xs-6.mt-2
        p La trazabilidad hace referencia al conjunto de actividades concatenadas cuyo objetivo es realizar seguimiento a cada eslabón del proceso mediante el cual se desarrolla la elaboración de un producto o la prestación de un servicio. A través de la revisión que se efectúa en este método de inspección se logran evidenciar avances, errores y fortalezas del proceso, permitiendo la articulación de indicadores; estos últimos son una herramienta importante para identificar a las personas responsables de los procesos de acuerdo a los datos históricos y a los posibles planes de acción ejecutados, así poder ejercer un mayor control sobre los sucesos que puedan surgir a lo largo de la cadena

    .row.justify-content-start.align-items-center.mb-4.mt-5
      .col-lg-5
        .bgp-degradado(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Tipos de trazabilidad
    
    .row.justify-content-center
      .col-lg-2.justify-content-center
        figure
          img(src='@/assets/curso/temas/tema3/t3-img2.png', alt='Texto que describa la imagen').img-animacion1
      .col-lg-10.col-xs-6.mt-2
        p Es importante que los integrantes de las organizaciones cuenten con la capacidad de identificar el tipo de trazabilidad que deben realizar conforme a las solicitudes y respuestas de los servicios prestados por la organización. Los encargados en planear y ejecutar el plan de formación estipulado en la empresa deben brindar los métodos y las herramientas necesarias para que los colaboradores puedan identificar y ejecutar efectivamente los diferentes tipos de trazabilidad; con el objetivo de analizar cada uno de los procesos relacionados a la cadena. Este proceso es clave para disminuir la probabilidad de que un error pueda materializarse, llevando consigo pérdidas económicas, imagen negativa de la organización e insatisfacción por parte de los usuarios. Así mismo, la empresa debe velar por obtener datos íntegros, dado que los usuarios o consumidores día a día buscan obtener la información que sea necesaria para estar involucrados, y conocer del estado de avance de sus solicitudes y los implicados en este proceso.

    .row.justify-content-center
      p La trazabilidad en las solicitudes y respuestas de los servicios prestados en la organización se clasifican de la siguiente manera:

      ImagenInfografica.color-acento-botones.mt-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema3/t3-img3.png', alt='Texto que describa la imagen')

        .tarjeta.estilo-cajon.p-3(x="27.3%" y="58%" numero="+")
          .h5.mb-2 Trazabilidad ascendente 
          p Este método está directamente relacionado a los productos o servicios que salen del proveedor hacia el consumidor final. Este tipo de trazabilidad consiste en identificar y registrar los sucesos o hechos del proceso desde el punto de partida hasta la recepción en el cliente final, permitiendo identificar riesgos y posibles situaciones en particular y facilitando una respuesta efectiva al cliente. 
          p De igual manera, esta clasificación influye en la toma de decisiones en momentos claves, y en la disminución de la insatisfacción del cliente. Ejemplo:
          p ● Un usuario realiza seguimiento de la solicitud hecha al área de      compras de la organización, la cual mediante una plataforma puede visualizar el estado del producto, su localización y el personal que se encuentra encargado antes de la recepción en su área para finalizar con la entrega al cliente.

        .tarjeta.estilo-cajon.p-3(x="55.4%" y="68.5%" numero="+")
          .h5.mb-2 Trazabilidad descendente
          p Este tipo de trazabilidad suele ser común en solicitudes donde se debe identificar un suceso que afectó positiva o negativamente el bien o servicio que fue prestado al cliente. Es por ello, que el talento humano debe identificar la información histórica desde el momento de la recepción hasta el inicio de la operación.
            br
            br
            |Ejemplo:
            br
            br
            |● El director de logística, evidencia el reporte de una inconformidad con relación a la calidad del producto; él procede a informar al área de producción donde se revisa el listado operacional, para identificar cuáles fueron las áreas o personas involucradas y el momento en que se ocasionó esta inconformidad, para así establecer las medidas correctivas y prevenir riesgos a futuro, a causa de esta solicitud.
        
        .tarjeta.estilo-cajon.p-3(x="72.5%" y="33%" numero="+")
          .h5.mb-2 Trazabilidad interna
          p Hace referencia al seguimiento al interior de las organizaciones, donde se identifican los indicadores de las materias primas, insumos, recursos y herramientas que hacen parte de los procesos en la cadena de suministro, tiene como objetivo registrar los movimientos de los mismos.
          p Ejemplo:
          p ● El área de producción de la organización requiere establecer un plan de producción y la asignación de recursos para la elaboración de un producto. Se decide realizar la medición de la materia prima utilizada en la construcción del producto mediante la trazabilidad del listado operacional revisando los datos históricos y planteando metas para la optimización del recurso.

    .row.justify-content-start.align-items-center.mb-4.mt-5
      .col-lg-5
        .bgp-degradado(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Técnicas de trazabilidad
    
    .row.justify-content-center
      .col-lg-4.justify-content-center
        figure
          img(src='@/assets/curso/temas/tema3/t3-img4.png', alt='Texto que describa la imagen')
      .col-lg-8.col-xs-6.mt-2
        p El personal designado para la revisión de la trazabilidad de los productos o servicio ofrecidos por la empresa debe estar en la capacidad de identificar las técnicas adecuadas para la ejecución del sistema de trazabilidad. Por lo anterior, el área de gestión humana debe efectuar el plan de formación de manera eficaz y con todo el paquete de capacitaciones. Lo anterior con el fin de fortalecer las habilidades técnicas y blandas de los colaboradores; gestionar y brindar la información en tiempo real e histórica de la elaboración de un producto o prestación de un servicio, y la posibilidad que los administradores tengan la información necesaria para la toma de decisiones o presentación de los resultados orientados a dar solución a las solicitudes y la satisfacción de los requerimientos de los clientes.

    .row.justify-content-center.mt-3
      p Para los colaboradores es esencial conocer las siguientes tres técnicas de trazabilidad:

    .row.justify-content-center.mt-3
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta clr--gris")
          .row(titulo="Codificación").p-4
            p En la administración documental es fundamental que todos los procedimientos, formatos y registros cuenten con una codificación, con el fin de dar un orden y organización a la documentación interna de la empresa. Esta técnica consiste en codificar los procesos o servicios para que sean reconocibles al momento de realizar la trazabilidad, y así efectuar la respuesta de las solicitudes. Codificar adecuadamente permite a los funcionarios clasificar éstos registros de acuerdo a los tipos de solicitudes y cumplir con los parámetros establecidos en los procedimientos de la organización, disminuyendo la probabilidad de error en la identificación de hallazgos en el ejercicio de la trazabilidad.
          
          .row(titulo="Estandarización de la información").p-4
            p Es el proceso en el que se ajustan y adaptan a las características de la información para que esta sea similar frente a un tipo determinado. Tiene como objetivo que los colaboradores designados a realizar la trazabilidad de un producto o servicio obtengan la posibilidad del tratamiento, análisis y uso de la información de forma sencilla y ágil.
            p La organización debe propiciar a los colaboradores las herramientas y formaciones necesarias para garantizar que todas las solicitudes o datos que sean suministrados por los clientes cuenten con plantillas o plataformas estandarizadas, y en la medida de que los involucrados interactúen con ella puedan compararla, consultarla y encontrarla, así sea útil para la elaboración de informes, visualización de estadísticas, indicadores y métricas de acuerdo a la analítica de estos datos.
            p Esta última, sirve como punto de partida para la toma de decisiones, articulación de planes de acción, conocer el estado de una solicitud, y reconocer las alternativas de solución o respuesta. Esta estrategia está encaminada a la satisfacción del cliente y atracción de nuevos mercados; de acuerdo a esta metodología ágil se propicia a la organización una imagen positiva y de competitividad frente a la competencia.
          
          .row(titulo="<i>Software</i>").p-4
            p Las empresas siempre deben procurar estar a la vanguardia en temas de innovación, dado que es un factor de atracción de nuevos clientes y fidelización de los que ya se encuentran dentro de la organización. Implementar #[em software] direccionados a la trazabilidad de las solicitudes de los usuarios, permite a los colaboradores de la organización registrar y visualizar los movimientos o actividades que han sido ejecutadas en tiempo real y tramitarlos, para brindar a los usuarios, una respuesta eficiente a la solicitud del servicio.
              br
              br
              |Este instrumento también permite a los colaboradores tener el control constante de la calidad del producto o servicio hasta la recepción del usuario; entregar la información en tiempo real como método de fidelización y atracción de clientes, del mismo modo es un factor clave para la toma de decisiones relacionadas a la solución eficaz y oportuna de las solicitudes de los clientes y la generación de experiencias positivas y armoniosas.
      
      .col-lg-4.justify-content-center
        figure
          img(src='@/assets/curso/temas/tema3/t3-img5.png', alt='Texto que describa la imagen')

      .row.justify-content-center.mt-5
        .col-lg-10.justify-content-center
          .cajon.color-acento-contenido.p-4
            p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
