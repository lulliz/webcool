<script setup>
import Nav from '../components/Nav.vue'
import About from '../components/About.vue'
import Bcards from '../components/Bcards.vue'
import Typing from '../components/Typing.vue'
import Bestdev from '../components/Bestdev.vue'
import Students from '../components/Students.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <main class="w-full">
    <Nav />
    <About/>
    <Bestdev/>
    <Typing/>
    <Students/>
    <Bcards/>
    <Footer/>
  </main>
</template>
