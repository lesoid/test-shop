<template>
  <div class="container-layaut">
   <LayautHeader></LayautHeader>
    <div class="container-main">
       <LayautMenu></LayautMenu>
        <div class="content-slot">
             <slot></slot>
        </div>
    </div>
      <LayautFooter></LayautFooter>
     </div>
</template>
<script setup>
let choiceCat = useCategory()
   let category = ref(choiceCat)
  // наблюдение за ref-ссылкой
watch(category, (category) => {
  choiceCat.value = category
})
</script>


<style scoped>
.container-layaut{
  display: flex;
          flex-direction:column;
}
    .container-main{
        display: flex;
        /* flex-wrap: wrap; */
         flex-direction: row; 
         background: #e4d3d0;
         border:1px solid #131513;
          flex: 1 1 100vh;
    }
    .content-slot{
        /* position:absolute; */
         display: flex;
          flex-direction:column;
       /* flex-wrap: wrap; */
      flex: 1 1 100vh;
    }
</style>