<script>
import { store } from '../store/store';
import axios from 'axios';

export default {
  data(){
    return {
      nameToSearch : '',
      store
    }
  },

  methods:{
    getSearchedProjects(apiUrl){
      axios.get(apiUrl)
            .then(result => {
                store.projects = result.data.data
                store.links = result.data.links
                store.currentPage = result.data.links.currentPage
                store.lastPage = result.data.links.lastPage
                store.firstPage = result.data.links.firstPage
            })
    }
  }
}
</script>

<template>
  <div class="search mt-30 mb-30">
    <input
      @keyup.enter="getSearchedProjects(store.searchByName + nameToSearch)"
      type="text"
      v-model.trim="nameToSearch"
      placeholder="Search a project...">
    <button
      :disabled="nameToSearch == ''"
      @click="getSearchedProjects(store.searchByName + nameToSearch)"
      class="btn-custom">

      Search
    
    </button>
  </div>
</template>
<style lang="scss" scoped>

  .search{
    input{
      border: 1px solid lightblue;
      border-radius: 7px;
      padding: 8px;
    }

    .btn-custom{
      color: #006664;
      font-weight: 900;
    }
  }

</style>