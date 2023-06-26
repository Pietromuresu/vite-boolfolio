<script>
  import { store } from "./store/store";
  import axios from "axios";

import ProjectCard from './components/partials/ProjectCard.vue';

  export default {
    name: "App",
  components: {    
    ProjectCard 
  },

  data(){
    return {
      projects: []
    }
  },

  methods:{
    getApi(){

      axios.get(store.apiUrl + "projects")
            .then(results => {
                this.projects = results.data;
                console.log(this.projects);
            })
    }
  },

  mounted(){
    this.getApi();
  }
}
</script>

<template>
  <h1>Vite Boolfolio </h1>

  <div class="container pm-card-wrapper">

     <ProjectCard
      v-for="project in projects" 
      :key="project.id"
      :name="project.name" 
      :technologies="project.technologies" 
      :type="project.type" 
      :is_done="project.is_done"
      :img_path="project.image_path"/>
  
  </div>
</template>

<style lang="scss">

h1{
  text-align: center;
  margin-top: 20px;
}

.container{
  table{
    width: 90%;
    background: white;
    margin: 0 auto;

    td{
      border: 1px solid black;
    }
  }

}

</style>  