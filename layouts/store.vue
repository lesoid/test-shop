<template>
  <div>
    <header class="header-def">
    <nav class="container-hed">
        <div  class="font-bold">
            <NuxtLink to="/">
                <img src="../static/surse/img/header/dree.JPG" alt="dree" >
            </NuxtLink> 
        </div>
        <div class="menu-heder">
            <ul class="ul-head">
            <li><NuxtLink to="/"><h3>Home</h3> </NuxtLink></li>
            <li><NuxtLink to="/about"><h3>About</h3></NuxtLink></li>
            <li><NuxtLink to="/store"><h3>Store</h3></NuxtLink></li>
            </ul>
        </div>
        <div class="auth-head">
                <NuxtLink to="/auth"><h3>Вход</h3></NuxtLink>
        </div>
    </nav>
    </header>
    <div class="container-main">
        <div class="munu-main">
            <ul class="menu-ul"><h3>Category</h3>
            <li><NuxtLink to="/"><strong>Home</strong> </NuxtLink></li>
            <li><NuxtLink to="/about"><strong>About</strong></NuxtLink></li>
            <li><NuxtLink to="/store"><strong>Store</strong></NuxtLink></li>
            </ul>
        </div>
        <div class="content-slot">
             <slot />
        </div>
    </div>
     </div>
</template>
<script>

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
    /* content */
    .container-main{
        display: flex;
        /* flex-wrap: wrap; */
         flex-direction: row; 
         background: #e4d3d0;
         border:1px solid #131513;
          
    }
    .content-slot{
        /* position:absolute; */
         display: flex;
          flex-direction: row;
       /* flex-wrap: wrap; */
      flex: 1 1 100vh;
    }
     .munu-main{
         background: #d8a49b;
          display: flex;
           min-width: 149px;
           /* max-width: 150px; */
    height: 100vh;
    } 
    .menu-ul{ 
    display: flex;
   flex-direction: column;
   padding-inline-start: 15px;
   list-style: none;
   width: 130px;
    }
    .menu-ul>li{
        margin-bottom: 0.5rem; 
        }
    .menu-ul>li a{
        text-decoration:none;
    }
    /* footer*/
    
    

</style>