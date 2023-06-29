
<script>
import { store } from "../../store/store";
import axios from "axios";

import ProjectCard from '../partials/ProjectCard.vue';
import SearchAside from '../partials/searchAside.vue';

export default {
  name: 'AllProjects',

  components: {    
    ProjectCard,
    SearchAside
  },

  data(){
    return {
      store

    }
  },
mounted(){
  store.getApi(store.paginatedUrl);

},
}
</script>

<template>
  <h1>Vite Boolfolio </h1>  

  <div class="pm-row">
    <searchAside/>

    <div v-if="store.projects.length > 0" class="pm-container-projects">

      <div class="container pm-card-wrapper">

        <ProjectCard
        v-for="project in store.projects" 
        :key="project.id"
        :name="project.name" 
        :technologies="project.technologies" 
        :type="project.type" 
        :is_done="project.is_done"
        :img_path="project.image_path"
        :slug="project.slug"/>
          
      </div>
      
      
      <div class="pm-card-controller">
        <button
        :disabled="store.currentPage == 1"
        @click="store.getApi(store.firstPage)"
        class="pm-button-card-controller">
        &lt;&lt; 
        </button>
      
        <button
        class="pm-button-card-controller"
        v-for="(link, index) in store.links"
        :key="index"
        v-html="link.label"
        @click="store.getApi(link.url)"
        :disabled="link.active || !link.url ">
        </button>
      
        <button
        :disabled="store.currentPage == store.numLastPage"
        @click="store.getApi(store.lastPage)"
        class="pm-button-card-controller">
        &gt;&gt; 
        </button>
      
      </div>
    </div>

    <div v-else class="no-projects-holder">
      <h1>There's no project with those properties</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.no-projects-holder{
  width: 90%;
  margin: 0 auto;
  h1{
    margin-top: 200px;
    text-align: center;
    color: rgb(147, 42, 42);
  }
}

h1{
  text-align: center;
  margin-top: 20px;
}

.pm-row{
  display: flex;
  
  .pm-container-projects{
    margin: 0 auto;

    .pm-card-controller{
      text-align: center;

      .pm-button-card-controller{

        border: 0;
        background-color:white;
        padding: 5px 15px;
        border-radius: 7px;
        margin-left: 5px;
        margin-top: 25px;

      }
    }
  }
}

</style>