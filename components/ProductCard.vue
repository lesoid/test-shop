<template>
  <div class="card">
    <div class="img-box">
    <img :src="`${product.image}`" class="thumb" />
    </div>
    <!-- <p id="descript" class="text-title">{{ product.title }}</p> -->
    <p id="descript" class="text-title">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="detal">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>

<style scoped>

.card {
  display: flex;
  flex-direction: column;
     /* border: solid  1px cornflowerblue; */
     height: 100%;
     /* justify-content:flex-end; */
    /* border:1px solid black; */
}
.img-box{
   display: flex;
   justify-content:center;
    /* border:1px solid rgb(213, 12, 12); */
  width: 99%;
  min-height: 126px;
}
  .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
    /* border:1px solid black; */
    align-self: center;
    margin-top: 3px;
    flex: 2 0 auto;
  }


.text-title{
   margin-top: 8px;
  /* border:1px solid black; */
  width:146px ;
  height:55px;
  overflow:hidden ; 
 text-overflow:ellipsis ;
} 

.detal{
  display: flex;
  flex-direction: column;
  align-items: center;
  /* order: 2; */
   /* border:1px solid black; */
   margin-top: 8px;
    
} 
.card a{
text-decoration:none;

}
.card a p{
text-decoration-color: blueviolet;
}
  
</style>