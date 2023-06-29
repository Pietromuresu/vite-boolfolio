<script>
import { store } from '../store/store';
import axios from 'axios';

export default {
  data(){
    return {
      nameToSearch : '',
    }
  },

  methods:{
    getSearchedProjects(){
      axios.get()
            .then(result => {
                console.log(result);
            })
    }
  }
}
</script>

<template>
  <div class="search mt-30 mb-30">
    <input type="text" v-model="nameToSearch" placeholder="Search a project...">
    <button @click="getSearchedProjects()" class="btn-custom">
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