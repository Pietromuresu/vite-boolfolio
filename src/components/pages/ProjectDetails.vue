
<script>
import {store} from '../../store/store';
import axios from 'axios';

export default {
  name: 'ProjectDetails',

  data(){
    return {
       store,
       loading : true
    }
  },

  methods:{
    getApi(){
      this.loading = true,
      axios.get(store.projectUrl + this.$route.params.slug)
            .then(result => {
              store.project = (result.data);
              console.log(store.project);
              this.loading = false
            })
    },
  } ,
  mounted(){
    this.getApi()
  }

}
</script>

<template>
  <div v-if="!loading" class="container">
    <div class="titles">
      <h1>
        {{ store.project.name }}
      </h1>

      <div>
        <span>
          <strong>
            {{ store.project.type.name }}
          </strong>
        </span>
      </div>
      <div>
        <span class="badge" v-for="technology in store.project.technologies" :key="technology.id">
          {{ technology.name }}
        </span>
      </div>
    </div>

    <div class="img-container mt-50 mb-50">
      <img v-if="store.project.image_path" :src="'http://127.0.0.1:8000/storage/' + store.project.image_path" :alt="store.project.name">
      <img v-else src="http://127.0.0.1:8000/storage/uploads/default-image.jpeg" alt="">
    </div>

    <div class="descriptions mt-50">
      <div class="team">
        <div>
          <h3>Team</h3>
          <ul>
            <li>
              {{ store.project.team_members }}
            </li>
          </ul>
        </div>

        <div>
          <h3>Project Manager</h3>
          <ul>
            <li>
              {{ store.project.project_manager }}
            </li>
          </ul>
        </div>

      </div>

      <div class="desc mt-50">
        <h3 >Purpose</h3>
        <p class="mt-20">{{ store.project.purpose }}</p>

        <h3 class="mt-50" >Description</h3>
        <p class="mt-20">{{ store.project.description }}</p>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped> 
.badge{
  display: inline-block;
  padding: 4px 10px;
  border-radius: 10px;
  background-color: #333;
  color: white;
  margin-top: 10px;
}


.container {
  .titles{

  }

  .img-container{
    img{
      height: 400px;
    }
  }

  .descriptions{
    .team{
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>