import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  
  apiUrl : "http://127.0.0.1:8000/api/",
  paginatedUrl : "http://127.0.0.1:8000/api/projects?page=1",
  technologiesUrl : "http://127.0.0.1:8000/api/technologies",
  typesUrl : "http://127.0.0.1:8000/api/projects/project-types/",
  technologiesUrl : "http://127.0.0.1:8000/api/projects/project-technologies/",
  searchByName : "http://127.0.0.1:8000/api/projects/search/",
  projectUrl : "http://127.0.0.1:8000/api/projects/",




  projects: [],
  project: [],
  types: [],
  technologies: [],
  links: [],
  currentPage: null,
  numLastPage: null,
  lastPage: null,
  firstPage: null,

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

})