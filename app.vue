<template>
  <div>
    <NuxtLayout :name="Header"></NuxtLayout>
        <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
const Header = "header";

useHead({
    script: [
            {
                src: 'js/main.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js',
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
            },
            {
                src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
                tagPosition: 'bodyClose'
            }
        ]
})
</script>

