
<script>
export default {
    name: "ProjectCard",
    data(){
      return{

        storage_path: "http://127.0.0.1:8000/storage/",
      }
    },

  props: {
    name: String,
    technologies: Array,
    type: Object,
    is_done: Number,
    img_path: String,
    slug: String,
  }
}
</script>

<template>


    
    <div class="pm-projectCard mt-20">
        <router-link :to="{name: 'ProjectDetails', params: {slug: slug}}" class="details-link">
        <div class="pm-project-image">
          <img v-if="img_path" :src="storage_path + img_path" :alt="img_path">
          <img v-else :src="storage_path + 'uploads/default-image.jpeg' " :alt="img_path" >
        </div>
        
        <div class="pm-project-details p-10">
          <h3>{{ name }}</h3>
          <p>
            <span v-for="technology in technologies" :key="technology.id">
              {{ technology.name }} - 
            </span> 
          </p>
          <p>{{ type.name }}</p>
          <p v-if="is_done">Completed</p>
          <p v-if="!is_done">Not completed</p>
        </div>
        </router-link>
      </div>
      

    </template>

<style lang="scss" scoped>
  a.details-link{
    display: inline-block;
    height: 100%;
    color: black;
    text-decoration: none;
  }
  .pm-projectCard{
    min-width: 250px;
    min-height: 300px;
    max-width: 350px;
    max-height: 400px;
    width: calc(90% / 4);

    text-align: center;
    

    border-radius: 7px;

    background: white;
    
    .pm-project-image{
      overflow: hidden;
      max-width: 100%;
      max-height: 200px;
      img{
        max-width: 100%;

      }

    }
    .pm-project-details{

      p, p>span{
        margin-top: 10px;

        &:last-of-type{
          margin-bottom: 10px ;
        }
      }
    }
  }
</style>