<script>
  import Header from './components/partials/Header.vue'

  export default {
    name: "App",
    components: {
      Header
    }
}
</script>

<template>
  
  <Header />

  <router-view></router-view>
  
</template>

<style lang="scss">




</style>  