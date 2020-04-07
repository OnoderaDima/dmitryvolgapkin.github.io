<template>
  <div id="app">
    <Vender :goods="goods"/>
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
    this.getGoods();
  },

  methods: {
    async getGoods() {
      let response = await fetch('https://raw.githubusercontent.com/OnoderaDima/vending/master/goods.json');

      if (response.ok) {
        let json = await response.json();

        this.goods = json.goods;
      }
      else {
        console.log("Ошибка HTTP: " + response.status);
      }
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
