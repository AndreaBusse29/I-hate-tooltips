<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/images/logo.png" class="logo">
    <Main msg="I hate tooltips."/>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>
<style lang="scss">
   @import 'assets/styles/global.scss'
</style>