
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
      projects: [],
      types: [],
      technologies: [],
      links: [],
      currentPage: null,
      numLastPage: null,
      lastPage: null,
      firstPage: null,
      typesUrl : "http://127.0.0.1:8000/api/projects/type",

    }
  },

  methods:{
    getApi( apiUrl){

      axios.get(apiUrl)
            .then(results => {
             
                this.projects = results.data.data;
                this.links = results.data.links;
                this.currentPage = results.data.current_page;
                this.lastPage = results.data.last_page_url;
                this.numLastPage = results.data.last_page;
                this.firstPage = results.data.first_page_url;

            })
    },
    getType( apiUrl){

      axios.get(apiUrl)
            .then(results => {
  
                this.types = results.data;

                console.log(this.types);
            })
    },
    getTechnologies( apiUrl){

      axios.get(apiUrl)
            .then(results => {

                this.technologies = results.data;

                console.log(this.technologies);
            })
    },

    getByType(id){
      console.log(id);
      this.getApi(store.typesUrl + id);
      
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
            v-for="typeOf in types"
            :key="typeOf.id">
            <button @click="getByType(typeOf.id)" class="btn-custom">
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
            v-for="technology in technologies"
            :key="technology.id">
            <button class="btn-custom">
              {{technology.name}}
            </button>
          </li>

        </ul>
        
      </div>
    </div>

    <div class="pm-container-projects">

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
      
      
      <div class="pm-card-controller">
        <button
        :disabled="currentPage == 1"
        @click="getApi(firstPage)"
        class="pm-button-card-controller">
        &lt;&lt; 
      </button>
      
      <button
        class="pm-button-card-controller"
        v-for="(link, index) in links"
        :key="index"
        v-html="link.label"
        @click="getApi(link.url)"
        :disabled="link.active || !link.url ">
      </button>
      
      <button
        :disabled="currentPage == numLastPage"
        @click="getApi(lastPage)"
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

    .pm-filter-technologies{
      margin-top: 100px;
    }
    
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