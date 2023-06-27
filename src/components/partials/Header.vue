
<script>
import AllProjects from '../pages/AllProjects.vue';
import Contacts from '../pages/Contacts.vue';


export default {
  name: 'Header',

}
</script>

<template>
<header>

    <nav>
      <ul>
        <li class="ml-20">
          <router-link :to="{name: 'Home'}">Home</router-link>
        </li>
        <li class="ml-20">
          <router-link :to="{name: 'Contacts'}">Contacts</router-link>
        </li>
        <li class="ml-20">
          <router-link :to="{name: 'AllProjects'}">AllProjects</router-link>
        </li>
      </ul>
    </nav>

  </header>

</template>

<style lang="scss" scoped>

  header{
    position: fixed;
    top: 0;
    left: 0;


    width: 100%;
    height: 70px;
    background-color: #fff;
    nav{


      ul{
        display: flex;
        justify-content: center;
        list-style: none;

        li{
          

          &:hover>a{
            color: rgb(93, 122, 209);
          }
          
          a{
            display: inline-block;
            line-height: 70px;
            text-decoration: none;
            color: black;
            
            &.active{
              color: rgb(93, 122, 209);
              
            }
          }
        }
      }
    }
  }
  </style>
  