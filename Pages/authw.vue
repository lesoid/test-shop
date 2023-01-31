<script setup>
let contact1 = ref (false)
// definePageMeta({
//   layout: "store",
// })


</script>



<template>
    <h2  :style="{color:contact1?'red':'green'}">rrr</h2>
   <h2 :class="['hhh',{ttt:contact1}]">AUTH@</h2> 
    <button @click="contact1=!contact1">activ</button>
</template>

<style scoped>
.ttt:hover{
    color: blue;
}
.ttt{
   display: none;
}

</style>