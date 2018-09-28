<template>
  <div id="app">
    <NavbarHome />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavbarHome from './components/NavbarHome.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    NavbarHome
  }
}
</script>

<style>
  #app {
    font-family: 'Lato', sans-serif;
    height: 100vh;
    display: flex;
  }
</style>
