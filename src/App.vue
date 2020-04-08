<template>
  <div id="app">
    <Vender :goods="getData()"/>
  </div>
</template>

<script>
import Vender from './components/Vender.vue'

export default {
  name: 'App',

  data() {
    return {
      goods: [],
    }
  },

  created() {
    this.$store.dispatch("getGoods",{jsonUrl: "https://raw.githubusercontent.com/OnoderaDima/vending/master/goods.json"});
  },

  methods: {
    getData() { 
      return this.$store.getters.getGoods;
    },
  },

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
