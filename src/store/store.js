import { reactive } from "vue";

export const store = reactive({
  
  apiUrl : "http://127.0.0.1:8000/api/",
  paginatedUrl : "http://127.0.0.1:8000/api/projects?page=1",
  technologiesUrl : "http://127.0.0.1:8000/api/technologies",
  typesUrl : "http://127.0.0.1:8000/api/projects/project-types/",
  technologiesUrl : "http://127.0.0.1:8000/api/projects/project-technologies/",
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

})