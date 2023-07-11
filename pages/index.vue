<template>
    <NuxtLayout :name="slideheader"></NuxtLayout>
    <NuxtLayout :name="kategori"></NuxtLayout>
    <NuxtLayout :name="Review"></NuxtLayout>
    <Footer></Footer>
</template>
<script setup>
const slideheader = "hero";
const kategori = "team";
const Review ="review";

import Footer from '~/component/footer.vue';



</script>