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

  <main>
    <router-view></router-view>
  </main>
  
</template>

<style lang="scss">

main{
  margin-top: 80px;
}


</style>  