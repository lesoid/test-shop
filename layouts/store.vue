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
       
          <br>

          <div>
                  <input id="radio1" type="radio" value="all" v-model="category"> <label for="radio1">All </label>
              </div>
              <div>
                  <input id="radio2" type="radio"  value="women's clothing" v-model="category" > <label for="radio2">Женская одежда </label>
              </div>
              <div>
                <input  id="radio3" type="radio" value="men's clothing" v-model="category"><label for="radio3">Мужская одежда</label>
              </div>
              <div>
                <input id="radio4" type="radio" value="electronics" v-model="category"> <label for="radio4">Электроника</label> 
              </div>
              <div>
                <input id="radio5" type="radio" value="jewelery" v-model="category"> <label for="radio5">Бижутерия</label>
               
              </div>
              <!-- <span>Выбрано: {{ choiceCat }}</span> -->
        </div>
        <div class="content-slot">
             <slot />
        </div>
    </div>
    <footer>
      <div>
      <!-- <qq @increase-by="increaseCount" /> -->
        <!-- <p>ttt {{typeof(increaseCount)}}</p> -->
        <!-- <p>ttt {{increaseCount}}</p> -->
      </div>
      <div>
  <nav>
    <h2>{{ pageNow }}</h2>
    <ul v-for="i in 5" :key="i">
      <li>{{i}}</li>
     
    </ul>
  </nav>
</div>
      
    </footer>
     </div>
</template>
<script setup>
let pageNow = usePageStore()
let choiceCat = useCategory()
   let category = ref(choiceCat)
  // наблюдение за ref-ссылкой

watch(category, (category) => {
  choiceCat.value = category
})

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
    input[type='radio'],
label {
    cursor: pointer;
}

input[type='radio'] {
    height: 15px;
    width: 15px;
}
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
      display: flex;
      flex-direction: column;
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