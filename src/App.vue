<template>
  <div id="app">
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavbarHome from './components/NavbarHome.vue'

export default {
  name: 'app',
  components: {
    NavbarHome
  }
}
</script>

<style>
  #app {
    font-family: 'Lato', sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center
  }

  #content {
    height: 100%;
    width: 75%;
  }
</style>
