<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <btcindex />
  </div>
</template>

<script>
import btcindex from './components/btcindex.vue';

export default {
  name: 'App',
  components: {
      btcindex
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
