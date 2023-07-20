// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title : 'Alpina-Official',
      link : [
        {
          rel: 'icon',
          href: 'favicon.png'
        },
        {
          rel: 'stylesheet',
          href: 'css/style.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
        },
        {
          rel: 'icon',
          href: 'img/apple-touch-icon.png'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700|Raleway:300,400,400i,500,500i,700,800,900'
        },
        {
          rel: 'stylesheet',
          href: 'vendor/animate.css/animate.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'vendor/bootstrap/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'vendor/bootstrap-icons/bootstrap-icons.css'
        },
        {
          rel: 'stylesheet',
          href: 'vendor/boxicons/css/boxicons.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'vendor/swiper/swiper-bundle.min.css'
        },
        {
          rel:'stylesheet',
          href:'https://fonts.googleapis.com/css2?family=Jacques+Francois&display=swap'
        },
        {
          rel:'stylesheet',
          href:'vendor/glightbox/css/glightbox.min.css'
        },
        {
          rel:'stylesheet',
          href:'css/jquery-ui.css'
        },
        {
          rel:'stylesheet',
          href:'css/owl.carousel.min.css'
        },
        {
          rel:'stylesheet',
          href:'css/owl.theme.default.min.css'
        },
        {
          rel:'stylesheet',
          href:'css/aos.css'
        },
        {
          rel:'stylesheet',
          href:'css/main.css'
        }
      ],
      
    },
  },
  // components: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
