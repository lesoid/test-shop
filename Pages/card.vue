<template>
  <!-- <button @click="getTov">card</button> -->
  <!-- <p>res {{product?.title }}</p>
  <p v-if="product">res2 {{product?.description }}</p> -->
  <Card></Card>
</template>
<script lang="ts">

import {getProd} from "~~/composables/getOneProduct"
import {defineComponent} from "vue"
export default defineComponent({

data() {
  return {
    product:{}
  }
},
created: function(){
  this.getTov()
},
methods:{
async  getTov() {
 try {
//  console.log("!!! Card START ")
 const product = await getProd()
 // console.log("!!! Card response "+ product)
 // console.log("!!! Card response "+JSON.stringify( product))
 this.product = product
 } catch (error) {
console.log("!!! Card error "+error)
 }
 
// console.log("!!! Card Fin ")
// return product
}

},

setup (){
useHead({
title: 'CarD1 ',
meta: [
  { name: 'description', content: 'My Test site Card.'}
]
}),
definePageMeta({
layout: "store",
})
}
})


</script>