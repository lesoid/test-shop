<template>
 
    <div class="container-card">
      <div class="for-cart" v-for="p of products" :key="p">
        <div class="for-main" v-if="choiceCat == 'all'||choiceCat == p.category"  >
        <ProductCard   :product="p" />
      </div>
      </div>
    </div>

</template>

<script setup>

let choiceCat = useCategory()
  const { data:products } = await useFetch('https://fakestoreapi.com/products')

  useHead({
    title: 'Store ',
    meta: [
      { name: 'description', content: 'My Test site.'}
    ]
  })
definePageMeta({
    layout: "store",
  })
  </script>

  <style scoped>
  /* .container-main{
    display: flex;
    /* flex-direction: row; */
    /* flex-wrap: wrap; */
    /* width: 100%; 
  } */
  .container-card{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .for-main{
   width: 150px;
   height: 260px;
   margin:0.3rem;
   background-color: aliceblue;
  }
  /* .for-cart{
    vertical-align: top;
  } */
  </style>