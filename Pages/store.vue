<template>
 
    <div class="container-card">
      <div class="for-cart" v-for="p of products" :key="p">
        <div class="for-main" v-if="choiceCat == 'all'||choiceCat == p.category"   >
         <!-- <p>{{ p.id }}" " {{pageNow= count++ }}" "{{pageNow  }}</p>  -->
        <ProductCard  :product="p" />
      </div>
      </div>
    </div>

</template>

<script >
export default {
  data(){
  return {
    products : [{}],
   pageNow : usePageStore(),
   choiceCat : useCategory()
  }
},
created: function(){
 this.countPage()
},

methods:{
 async countPage (page = this.pageNow){
    if (page>0) {
      const { data:products } = await useFetch('https://fakestoreapi.com/products')
      this.products = products.value
    } else {
    console.log ("ELSE!!!")
    }
  // const { data:products } = await useFetch('https://fakestoreapi.com/products')},
 },
},

 setup (){

  useHead({
    title: 'Store ',
    meta: [
      { name: 'description', content: 'My Test site.'}
    ]
  }),
definePageMeta({
    layout: "store",
    middleware: ["auth"]
  })
  }}

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