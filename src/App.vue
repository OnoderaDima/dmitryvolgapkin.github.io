<template>
  <div id="app">
    <Vender/>
  </div>
</template>

<script>
import Vender from './components/Vender.vue'

export default {
  name: 'App',

  components: {
    Vender,
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100vh;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
