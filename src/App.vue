<script setup>
import HomeBackground from './components/HomeBackground.vue';
import HomeLogo from './components/HomeLogo.vue';
import HomePromo from './components/HomePromo.vue';
import HomeButton from './components/HomeButton.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <home-background>
    <home-logo></home-logo>
    <home-promo></home-promo>
    <home-button></home-button>
  </home-background>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
