<template>
    <header class="header-def">
      <nav class="container-hed">
          <div  class="font-bold">
              <NuxtLink to="/">
             
                  <img src="../../static/surse/img/header/dree.JPG" alt="dree" >
              </NuxtLink> 
          </div>
          <div class="menu-heder">
              <ul class="ul-head">
              <li><NuxtLink to="/"><h3>Home</h3> </NuxtLink></li>
              <li><NuxtLink to="/about"><h3>About</h3></NuxtLink></li>
              <li><NuxtLink to="/store"><h3>Store</h3></NuxtLink></li>
              <li><NuxtLink to="/authw"><h3>Auth2</h3></NuxtLink></li>
              <li><NuxtLink to="/card"><h3>Card</h3></NuxtLink></li>
              <li><NuxtLink to="/card1"><h3>Card1</h3></NuxtLink></li>
              </ul>
          </div>
           <!-- <User  /> -->
          <div class="auth-head">
            <!-- <User :auth="user !== null ? true : false" /> -->
            <User  />
            <p v-if="user">Hi {{ user.name }}</p>
            <p v-else style="color:brown">Гость</p>
               <!-- <p class="visit">{{countvisit}}</p> -->
                  <!-- <NuxtLink to="/auth"><h3>Вход</h3></NuxtLink> -->
          </div>
          
      </nav>
      </header>
</template>

<script setup>
import {useUser} from "~/composables/useAuth";
// const auth = useAuth();
// let countvisit = usePageVisitCount()
 let user = ref (await useUser())
//  const auth = useAuth();
 let countvisit = usePageVisitCount()
</script>

<style scoped>
 .router-link-exact-active {
    color: #12b448;
  }
  .header-def{
    background: #d8a49b;
  }
  .container-hed{/* nav */ 
    display: flex;
     /* border: solid  1px cornflowerblue; */
  }
  .font-bold{ /* div logo */
      display: flex;
      min-width: 150px;
      height: 100px;
      position: relative;
      }
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      }
      .ul-head{
    list-style: none;
    display: flex; 
     /* text-decoration: none; */
     /* border: solid  1px cornflowerblue; */
    }
  .ul-head li{
    /* border: solid  1px cornflowerblue; */
     margin: 0 10px;
    }
  .auth-head {
    /* border: solid  1px cornflowerblue; */
    order: 999;
    margin-left: auto;
    margin-right: 30px;
    align-self: center;
    }
    .visit{
        padding-left: 1em;
    }


</style>