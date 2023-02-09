

<template>

<div class="container">
    <div class="svg" @click="hideActions = !hideActions">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" 
      stroke-width="1.5" 
        stroke="currentColor" class="">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    </div>
<div :id="[{ hidd: hideActions }]">
    <ul   v-if="hideActions" class=" " >
      
     <li v-if="auth" @click="logout">
        <a class="clogout " href="/">logout</a>
      </li>

      <li v-if="!auth">
        <NuxtLink class="cregister" href="/register">Register</NuxtLink>
      </li>

      <li v-if="!auth" >
        <NuxtLink class="clogin" href="/login">Login</NuxtLink>
      </li>
    </ul>
  </div>
  
  <!-- <p>{{ hideActions }}</p> -->
</div>
</template>


<script setup >
import { ref } from "@vue/reactivity";
import {useUser} from "~/composables/useAuth";
import { userLogout } from "~/composables/useAuth";



const logout = userLogout

// import { boolean } from "zod";
//  import { useAuth } from "~/composables/states";
// import { onClickOutside } from '@vueuse/core'
let auth = ref (await useUser())

const hideActions = ref(false)
// defineProps({
//   auth:{
//     type:boolean,
//     default:false
//   }

// })

</script>

<style  scoped>
#hidd{
  display: none; 
  background: rgb(131, 182, 195);
}
.container{
  display: flex;

}
.svg{
  width: 30px;
  align-self: center;
}
</style>
