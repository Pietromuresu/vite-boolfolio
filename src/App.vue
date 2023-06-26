<script>
  import { store } from "./store/store";
  import axios from "axios";

  export default {

  methods:{
    getApi(){

      axios.get(store.apiUrl + "projects")
            .then(results => {
                console.log(results.data)
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

  <div class="container">

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Technologies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
        </tr>
      </tbody>
    </table>

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