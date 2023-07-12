<template>
    <NuxtLayout :name="slideheader"></NuxtLayout>
    <NuxtLayout :name="kategori"></NuxtLayout>
    <NuxtLayout :name="Review"></NuxtLayout>
    <NuxtLayout :name="Blog"></NuxtLayout>
    <Footer></Footer>
</template>
<script setup>
const slideheader = "hero";
const kategori = "team";
const Review ="review";
const Blog ="blog";

import Footer from '~/component/footer.vue';



</script>