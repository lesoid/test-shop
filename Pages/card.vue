<template><div>
    <button @click="getTov">card</button>
    <p>res {{pr }}</p>
    <p v-if="pr">res2 {{pr}}</p>
  </div>
</template>
<script setup lang="ts">
 import {getProd} from "~~/composables/getOneProduct"
 let product: IProduct 
const pr =ref( useState<IProduct | null>("prod"))

 //console.log("!!! Card Card "+JSON.stringify( product))
 //let prod: IProduct = ref(product: IProduct)
 //product = ref():IProduct 
 async function getTov() {
   try {
    console.log("!!! Card START ")
    product = await getProd()
    console.log("!!! Card response "+ product)
    console.log("!!! Card response "+JSON.stringify( product))
    product.id = 5
   } catch (error) {
    console.log("!!! Card error "+error)
   }
   useState('prod').value = product
   console.log("!!! Card Fin ")
  return product
}

</script>