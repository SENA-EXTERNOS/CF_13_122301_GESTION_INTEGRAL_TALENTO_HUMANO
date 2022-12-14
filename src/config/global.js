export default {
  global: {
    componenteFormativo: 'Orientación y respuesta a los usuarios',
    descripcionCurso:
      'El cliente desempeña un papel fundamental en el crecimiento de todo tipo de organizaciones; cuando un cliente consulta a una empresa un tema específico las respuestas precisas, concretas, agradables y con base en la normativa son un valor agregado al servicio. Este proceso permite orientar al talento humano hacia el cumplimiento de las metas, y considera a la satisfacción del cliente una estrategia de atracción de nuevos mercados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/barra1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/barra2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/barra3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/barra4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/barra5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/barra6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Respuesta a usuarios',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Confidencialidad de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Trazabilidad del servicio',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Normatividad legal',
      referencia:
        'Decreto 255 de 2022. [Ministerio de comercio, industria y turismo]. Por el cual se adiciona la Sección 7 al Capítulo 25 del Título 2 de la Parte 2 del Libro 2 del Decreto 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo, sobre normas corporativas vinculantes para la certificación de buenas prácticas en protección de datos personales y su transferencia a terceros países. Febrero 23 de 2022.',
      tipo: 'Decreto',
      descarga: '/downloads/2.2c Decreto 255 de 2022.pdf',
    },
    {
      tema: 'Normatividad legal',
      referencia:
        'Decreto 1081 de 2015. [Presidencia de la República]. Por medio del cual se expide el Decreto Reglamentario Único del Sector Presidencia de la República. Mayo 26 de 2015.',
      tipo: 'Decreto',
      descarga:
        '/downloads/2.2b Decreto 1081 de 2015 Sector Presidencia de la República.pdf',
    },
    {
      tema: 'Normatividad legal',
      referencia:
        'Decreto 1377 de 2013. [Ministerio de Ambiente y Desarrollo Sostenible]. Por el cual se reglamenta parcialmente la Ley 1581 de 2012, Derogado Parcialmente por el Decreto 1081 de 2015. Junio 27 de 2013.',
      tipo: 'Decreto',
      descarga: '/downloads/2.2a Decreto 1377 de 2013.pdf',
    },
    {
      tema: 'Criterios éticos',
      referencia:
        'Arenal, C. (2018). Gestión de quejas y reclamaciones en materia de consumo: MF0245. Editorial Tutor Formación.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/44254',
    },
    {
      tema: 'Tiempos y plazos de respuesta',
      referencia:
        'Ley 1755 de 2015 [Congreso de la república]. Por medio de la cual se regula el Derecho Fundamental de Petición y se sustituye un título del Código de Procedimiento Administrativo y de lo Contencioso Administrativo. Junio 30 de 2015',
      tipo: 'Ley',
      descarga: '/downloads/1. Ley 1755 de 2015.pdf',
    },
    {
      tema: 'Normatividad legal',
      referencia:
        'Ley 1581 de 2012. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se dictan disposiciones generales para la protección de datos personales. Octubre 17 de 2012.',
      tipo: 'Ley',
      descarga: '/downloads/2.2 Ley1581de 2012.pdf',
    },
    {
      tema: 'Normatividad legal',
      referencia:
        'Sentencia 748 de 2011. [Corte Constitucional]. Control constitucional al Proyecto de Ley Estatutaria No. 184 de 2010 Senado; 046 de 2010 Cámara, por la cual se dictan disposiciones generales para la protección de datos personales. Octubre 6 de 2011.',
      tipo: 'Sentencia',
      descarga:
        '/downloads/2.2d Sentencia_748_de_2011_Corte_Constitucional.pdf',
    },
    {
      tema: 'Trazabilidad',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2021). Trazabilidad [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YYuztIQETBc',
    },
  ],
  glosario: [
    {
      termino: 'Criterio',
      significado: 'juicio o determinación tomado por una persona.',
    },
    {
      termino: 'Destreza',
      significado:
        'habilidad y experiencia para desarrollar una labor específica.',
    },
    {
      termino: 'Elocuencia',
      significado:
        'propiedad de hablar con fluidez y coherencia sobre un tema determinado.',
    },
    {
      termino: 'Eslabón',
      significado: 'pieza o parte de un elemento que está enlazado en cadena.',
    },
    {
      termino: 'Indicador',
      significado:
        'dato que sirve para conocer o valorar el estado de un proceso.',
    },
    {
      termino: 'Información histórica',
      significado: 'conjunto de datos que exponen sucesos pasados.',
    },
    {
      termino: 'Imprescindible',
      significado:
        'actividad o proceso que no se puede dejar de tener en consideración o pasar por alto.',
    },
    {
      termino: '<i>Software</i>',
      significado:
        'programas que permiten a los usuarios realizar alguna tarea mediante el uso de herramientas tecnológicas.',
    },
    {
      termino: 'Suceso',
      significado: 'acción que ocurre en un tiempo determinado.',
    },
    {
      termino: 'Técnica',
      significado:
        'conjunto de reglas y protocolos que tiene como objetivo obtener un resultado efectivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Izquierdo Carrasco, F. A. (2019). Atención al cliente en el proceso comercial.. IC Editorial.',
      link:
        'https://login.bdigital.sena.edu.co/login?qurl=https://elibro.net%2fes%2flc%2fsenavirtual%2ftitulos%2f113432',
    },
    {
      referencia:
        'Mateos de Pablo Blanco, M. Á. (2019). Atención al cliente y calidad en el servicio. COMM002PO.. IC Editorial.',
      link:
        'https://login.bdigital.sena.edu.co/login?qurl=https://elibro.net%2fes%2flc%2fsenavirtual%2ftitulos%2f124251',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
