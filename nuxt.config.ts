// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title : 'ini halaman home',
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
        }
      ],
      
    },
  },
  components: true,
})
