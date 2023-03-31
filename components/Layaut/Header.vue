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
              <li class="main-menu__item"><NuxtLink to="/"><strong>Home</strong> </NuxtLink></li>
              <!-- <li class="main-menu__item"><NuxtLink to="/about"><strong>About</strong></NuxtLink></li> -->
              <li class="main-menu__item"><NuxtLink to="/store"><strong>Store</strong></NuxtLink></li>
              <!-- <li class="main-menu__item"><NuxtLink to="/authw"><strong>Auth2</strong></NuxtLink></li> -->
              <li class="main-menu__item"><NuxtLink to="/card"><strong>Card</strong></NuxtLink></li>
              <!-- <li class="main-menu__item"><NuxtLink to="/card1"><strong>Card1</strong></NuxtLink></li> -->
              </ul>
              <!-- <ul>
                <li class="nnn"><NuxtLink to="/"><strong>Home</strong> </NuxtLink></li>
                <li class="nnn"><NuxtLink to="/about"><strong>About</strong> </NuxtLink></li>
              </ul> -->
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
    color: #243c2c;
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
    list-style-type: none;
    display: flex; 
    padding-left: 0;
    margin-bottom: 0;
    align-items: center;
    font-size: 21px;
    margin-top: 36px;
     /* text-decoration: none; */
     /* border: solid  1px cornflowerblue; */
    }
    .main-menu__item{
      position: relative;
      margin-right: 20px;
      margin-left: 20px;
     /* background-color: antiquewhite; */
    }
    .main-menu__item a{
      text-decoration: none;
    }
    .main-menu__item ::after{
      position: absolute;
      content:'';
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #103b15;
      opacity: 0;
      transition: all .25s;
    
    }
    .main-menu__item :hover ::after{
      bottom: -3px;
      opacity: 1;

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