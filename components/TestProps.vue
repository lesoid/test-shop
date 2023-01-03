<template>
    <!-- <p>3 {{ JSON.stringify (coc) }}</p> -->
 <hr>
 <p>Props {{coc }}</p>
 <hr>
 
 <hr>
 <p>useCategory {{choiceCat}}</p>
</template>
<script setup>
 const choiceCat = useCategory()
 
defineProps({
    coc: {
    rrr: String,
    default: 'WW'
  }
})
// return {
//     choiceCat:choiceCat
//  }
</script>