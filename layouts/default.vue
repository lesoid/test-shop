<template>
  <div>
 
    <LayautHeader></LayautHeader>  
  <!-- </header> -->
    <div class="container main">
      <slot></slot>
    <nuxt/>

    </div>
     </div>
 
</template>
<script setup >

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