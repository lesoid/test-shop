<template>
  <div class="container-item">
    <!-- <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
       <h2>Rout = {{ $route.params.id }} о продукте  {{product}}</h2> 
      <Meta name="description" :content="product.description" />
    </Head> -->
    <div class="img-box">
    <img :src="`${product.image}`" class="thumb" />
    </div>
    <div class="describe-item">
        <h2>{{product.title  }}</h2>
        <strong>{{ product.description }}</strong>
        <h4>{{ product.price }} <strong> $</strong></h4>
        <button  @click="Buy">Buy</button>
    </div>
   
    <!-- <ProductDetails :product="product" /> -->
  </div>

  {{ id }}{{ user.id }}
    <p>Product</p>
    {{JSON.stringify (product) }}
</template>
<style scoped>
.container-item{
  display: flex;
  flex-direction: column;
  /* padding: 20px; */
  border: 1px solid rebeccapurple;
  margin: 15px;
  margin-left: 5px;
}

.thumb{
  max-height: 450px;
  /* min-height: 160px; */
  max-width: 450px;
  /* min-width: 100%; */ 
  /* padding: 20px; */
  vertical-align: top;
  border: 1px solid rgb(22, 31, 105);
}
.describe-item{
  margin-left: 15px;
  max-width: 800px;
align-self: center;
}
.img-box{
  display: flex;
  justify-content: center;
}


</style>



<script setup>
import {useUser} from "~/composables/useAuth";

 let user = ref (await useUser())
  //const rout = useRoute()
  const { id } = useRoute().params

  const uri = 'https://fakestoreapi.com/products/' + id

  //  fetch the products
  const { data: product } = await useFetch(uri, { key: id })

  if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
  }
  function Buy(){
    addToCard(product.value.id, user.value.id)
  }

  // definePageMeta({
  //   layout: "store",
  // })
</script>