<template>
  <div>
    <!-- <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
       <h2>Rout = {{ $route.params.id }} о продукте  {{product}}</h2> 
      <Meta name="description" :content="product.description" />
    </Head> -->
    
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
  //const rout = useRoute()
  const { id } = useRoute().params
switch (id) {
    case "women's clothing":
        
        break;
    case "electronics":
        
        break;
    case "jewelery":
        
        break;
    case "men's clothing":
        
        break;

    default:
        break;
}
  const uri = 'https://fakestoreapi.com/products/' + id

  //  fetch the products
  const { data: product } = await useFetch(uri, { key: id })

  if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
  }

  definePageMeta({
    layout: "store",
  })
</script>