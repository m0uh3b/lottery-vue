<template>
  <div id="app">
    <img alt=" logo" src="./assets/eth-icon.png" width="200px" height="200px">
    <img alt=" logo" src="./assets/infura.png" width="200px" height="200px">
        <img alt=" logo" src="./assets/metamask.png" width="200px" height="200px">

    <Lottery balance="Welcome to Your Best Lottery Platform"/>
  </div>
</template>

<script>
import Lottery from './components/Lottery.vue'

export default {
  name: 'app',
  components: {
    Lottery
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
