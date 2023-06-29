
<script>
import { store } from '../../store/store';
import axios from 'axios';
import SearchBar from '../SearchBar.vue';



export default {
  name: "SearchAside",
  components: {    
    SearchBar,
  },
  data(){
    return {
      store
    }
  },
  methods: {
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
      store.getApi(store.typesUrl + id);

    },

    getByTechnology(id){
      console.log(id);
      store.getApi(store.technologiesUrl + id);

    },

    reset(){
      store.getApi(store.paginatedUrl)
    }
  },
  mounted(){
    this.getType(store.apiUrl + 'projects/types');
    this.getTechnologies(store.apiUrl + 'projects/technologies');
  }
}
</script>

<template>
  
  <div class="pm-filter-projects mb-30 mt-30">

    <SearchBar/>

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
    <div>
      <button @click="reset(store.paginatedUrl)" class="btn-custom reset">
        Reset
      </button>
    </div>
  </div>

</template>
<style lang="scss" scoped>
.pm-filter-projects{
  height: 700px;
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

.btn-custom.reset{
  background-color: #284444;
  color: white;
  transition: 0.5s;
  &:hover{
    background-color: white;
    color: #284444;

  }
}

</style>