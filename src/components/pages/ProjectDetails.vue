
<script>
import {store} from '../../store/store';
import axios from 'axios';

export default {
  name: 'ProjectDetails',

  data(){
    return {
       store
    }
  },

  methods:{
    getApi(apiUrl){
      axios.get(apiUrl)
            .then(result => {
              store.project = (result.data);
              console.log(store.project);
            })
    }
  } ,
  mounted(){
    this.getApi(store.projectUrl + 'rerum-blanditiis-velit-illum')
  }

}
</script>

<template>
  <h1>
    {{ store.project.name }}
  </h1>
</template>

<style lang="scss" scoped> 

</style>