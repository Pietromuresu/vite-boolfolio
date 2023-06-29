
<script>
import { store } from "../../store/store";
import axios from "axios";

import ProjectCard from '../partials/ProjectCard.vue';

export default {
  name: 'AllProjects',

  components: {    
    ProjectCard 
  },

  data(){
    return {
      store

    }
  },

  methods:{
    getApi( apiUrl){

      axios.get(apiUrl)
            .then(results => {
             
                store.projects = results.data.data;
                store.links = results.data.links;
                store.currentPage = results.data.current_page;
                store.lastPage = results.data.last_page_url;
                store.numLastPage = results.data.last_page;
                store.firstPage = results.data.first_page_url;

            })
    },
    getType(apiUrl){

      axios.get(apiUrl)
            .then(results => {
  
                store.types = results.data;


            })
    },
    getTechnologies( apiUrl){

      axios.get(apiUrl)
            .then(results => {

                store.technologies = results.data;


            })
    },

    getByType(id){
      console.log(id);
      this.getApi(store.typesUrl + id);
      
  },

    getByTechnology(id){
      console.log(id);
      this.getApi(store.technologiesUrl + id);
      
  },

},
mounted(){
  this.getApi(store.paginatedUrl);
  this.getType(store.apiUrl + 'projects/types');
  this.getTechnologies(store.apiUrl + 'projects/technologies');
},
}
</script>

<template>
  <h1>Vite Boolfolio </h1>

  <div class="pm-row">
    <div class="pm-filter-projects mb-30 mt-30">
      
      <div class="pm-filter-type p-10">
        <strong>
          Filter By Type
        </strong>
        <ul>
          <li
            v-for="typeOf in store.types"
            :key="typeOf.id">
            <button
              @click="getByType(typeOf.id)"
              class="btn-custom">
              {{ typeOf.name }}
            </button>
          </li>

        </ul>
        
      </div>
      <div class="pm-filter-technologies p-10">
        <strong>
          Filter By Technologies
        </strong>
        <ul>
          <li
            v-for="technology in store.technologies"
            :key="technology.id">
            <button
              class="btn-custom"
              @click="getByTechnology(technology.id)">
              {{technology.name}}
            </button>
          </li>

        </ul>
        
      </div>
    </div>

    <div class="pm-container-projects">

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
        @click="getApi(store.firstPage)"
        class="pm-button-card-controller">
        &lt;&lt; 
      </button>
      
      <button
        class="pm-button-card-controller"
        v-for="(link, index) in store.links"
        :key="index"
        v-html="link.label"
        @click="getApi(link.url)"
        :disabled="link.active || !link.url ">
      </button>
      
      <button
        :disabled="store.currentPage == store.numLastPage"
        @click="getApi(store.lastPage)"
        class="pm-button-card-controller">
        &gt;&gt; 
      </button>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>

h1{
  text-align: center;
  margin-top: 20px;
}

.pm-row{
  display: flex;
  .pm-filter-projects{

    background-color: #c7d2dd;
    width: 250px;
    text-align: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;


    .pm-filter-type,
    .pm-filter-technologies{
      
        
      ul{
        padding: 10px 20px;
        display: flex;
        flex-wrap: wrap;
        
        
        li{
          margin: 10px 2px;
          list-style: none;
          
          .btn-custom{
            background-color: #00666480;
          }
        }
      }
    }
  }
  
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