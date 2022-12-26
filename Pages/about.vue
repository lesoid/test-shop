<template>
<NuxtLink to="/"><h3>Home</h3> </NuxtLink>
    <h1>About</h1>
    <hr>
<!-- <strong> {{products[0]}}</strong> -->

    <hr>
    <!-- <strong> {{data[5]}}</strong> -->
     <hr>
</template>

<script setup>

  //  fetch the products


   
        //.then(this.products==data)
 



  useHead({
    title: 'Store ',
    meta: [
      { name: 'description', content: 'My Test site.'}
    ]
  })
definePageMeta({
    layout: "about1",
  })
  </script>
