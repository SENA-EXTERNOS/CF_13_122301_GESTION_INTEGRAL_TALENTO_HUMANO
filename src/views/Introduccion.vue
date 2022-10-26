<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .tarjeta.color-adicional-1.mt-5
      .row.justify-content-center
        .col-lg-2
          img(src='@/assets/curso/temas/introduccion-img1.png', alt='Texto que describa la imagen').img-animacion1
        .col-lg-10.justify-content-center
          p Apreciado aprendiz, bienvenido al presente componente formativo, donde conocerá todo lo relacionado a la orientación y respuesta de los clientes internos y externos de la organización. Este proceso es una herramienta eficaz para la satisfacción del cliente de acuerdo a las solicitudes que son presentadas en la cotidianidad; permitiéndole a las empresas lograr fidelizar y atraer nuevos clientes, además contribuye al fortalecimiento del servicio interno dentro de la organización. Para obtener el flujo correcto del proceso se aplicarán elementos didácticos para comprender la importancia del talento humano en el desarrollo de su rol con relación a la respuesta a usuarios y de la temática en general.

    .row.justify-content-center
      p En el siguiente video conocerá, de forma general, la temática que se estudiará en el presente recurso educativo.

    .row.mt-3
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
