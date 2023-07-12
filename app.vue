<template>
  <div>
    <NuxtLayout :name="Header"></NuxtLayout>
    <NuxtPage></NuxtPage>
    <NuxtLayout :name="Footer"></NuxtLayout>
    
  </div>
</template>

<script setup>
const Header = "header";
const Footer ="footer";

useHead({
    script: [
            {
                src: 'vendor/bootstrap/js/bootstrap.bundle.min.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'vendor/glightbox/js/glightbox.min.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'vendor/isotope-layout/isotope.pkgd.min.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'vendor/swiper/swiper-bundle.min.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'vendor/php-email-form/validate.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'js/main.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'js/jquery-3.3.1.min.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'js/jquery-ui.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'js/popper.min.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'js/owl.carousel.min.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'js/jquery.magnific-popup.min.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'js/aos.js',
                tagPosition: 'bodyClose'
            }
        ]
})
</script>

