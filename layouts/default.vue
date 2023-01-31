<template>
     


  <div>
    <!-- <header class="header-def"> -->
    <!-- <nav class="container-hed">
        <div  class="font-bold">
            <NuxtLink to="/">
                <img src="../static/surse/img/header/dree.JPG" alt="dree" >
            </NuxtLink> 
        </div>
        <div class="menu-heder">
            <ul>
            <li><NuxtLink to="/"><h3>Home</h3> </NuxtLink></li>
            <li><NuxtLink to="/about"><h3>About</h3></NuxtLink></li>
            <li><NuxtLink to="/store"><h3>Store</h3></NuxtLink></li>
            </ul>
        </div>
        <User  />
        <div class="auth-head">
              <div v-if="user"><strong>Hi {{user.name}}</strong><br>
               <strong>{{countvisit}}</strong>
              </div>
            <NuxtLink to="/auth"><h3>Вход</h3></NuxtLink>
        </div>
    </nav> -->
    <LayautHeader></LayautHeader>  
  <!-- </header> -->
    <div class="container main">
      <slot></slot>
    

    </div>
     </div>
 
</template>
<script setup >
// import {useUser} from "~/composables/useAuth";
// const auth = useAuth();
// let countvisit = usePageVisitCount()
//  let user = ref (await useUser())
</script>


<style scoped>
  .router-link-exact-active {
    color: #b41228;
  }
  .header-def{
    background: #88bd93;
  }
  .container-hed{/* nav */ 
    display: flex;
     /* border: solid  1px cornflowerblue; */
  }
  .font-bold{ /* div logo */
    display: flex;
    width: 150px;
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
  ul{
    list-style: none;
    display: flex; 
     /* border: solid  1px cornflowerblue; */
    }
  ul li{
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
</style>