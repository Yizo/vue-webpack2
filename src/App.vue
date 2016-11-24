<template>
<div id="app">
    <cb-nav></cb-nav>
    <cb-content></cb-content>
</div>
</template>

<script>
import store from './vuex/store'
import cbNav from './components/cb-nav.vue'
import cbContent from './components/cb-content.vue'

export default {
  store:store,
  name: 'app',
  components: { cbNav,cbContent }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  clear: both;
}
  html{
    margin: 0;
    padding: 0;
  }

</style>
