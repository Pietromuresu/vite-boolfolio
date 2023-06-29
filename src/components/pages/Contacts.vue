<script>
import axios from 'axios';
import { store } from '../../store/store';
export default {
  name: 'Contacts',

  data(){
    return{

      name : '',
      mail : '',
      message : '',
      errors : {},
      success : false,
      sent : true
      
    }
  },

  methods: {
    submitForm(){
      this.sent = false;
      const data = {
      name : this.name,
      mail : this.mail,
      message : this.message

      }

      axios.post(store.apiGetLead, data)
            .then(result => {
              if(!result.data.success){    
                  this.errors = result.data.errors

              }else{
                  this.errors = {}
              }
              this.name = '',
              this.mail = '',
              this.message = ''

              this.sent = true;
            });
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>Contacts</h1>

    <div class="container mt-20">
      <form @submit.prevent="submitForm()">
        <div class="mt-20 ">
          <label class="d-block mb-10" for="name"><strong>Name</strong></label>
          <input name="name" type="text" v-model="name" placeholder="Write your name">
          <p  v-if="errors">{{ errors.name }}</p>
        </div>

        <div class="mt-20 ">
          <label class="d-block mb-10" for="mail"><strong>Mail</strong></label>
          <input name="mail" type="mail" v-model="mail" placeholder="Write your mail">
          <p  v-if="errors">{{ errors.mail }}</p>

        </div>

        <div class="mt-20 ">
          <label class="d-block mb-10" for="message"><strong>Message</strong></label>
          <textarea name="message" type="text" rows="10" v-model="message" placeholder="Write your message"></textarea>
          <p  v-if="errors">{{ errors.message }}</p>

        </div>

        <div class="btn-container">

          <button :disabled="!sent" type="submit"  class="btn-custom mt-50">
            Send
          </button>
          
        </div>
      </form>
    </div>
  </div>

</template>

<style lang="scss" scoped>

.container{
  form{
    width: 50%;
    margin: 0 auto;
    input, textarea{
      border-radius: 10px;
      border: 0;
      padding: 10px;
      width: 100%;
    }

    .btn-container{
      display: flex;
      justify-content: end;
      .btn-custom{
        width: fit-content;
        padding: 5px 15px;
      }
    }
  }
}
</style>