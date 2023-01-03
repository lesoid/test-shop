<template>
 
  <div class="container-card">
    <div class="for-cart" v-for="p of products" :key="p">
      <div class="for-main" v-if="choiceCat == 'all'||choiceCat == p.category"   >
       <!-- <p>{{ p.id }}" " {{pageNow= count++ }}" "{{pageNow  }}</p>  -->
      <ProductCard  :product="p" />
    </div>
    </div>
    
  </div>
  <nav>

<ul>{{ numPage }}<li> <button   @click="numPage=1"> 1</button> </li>
  <li> <button    @click="numPage=2" > 2</button></li></ul>
</nav>
<div id="v-model-select" class="demo">
  <select v-model="selected">
    <option disabled value="">товаров на странице</option>
    <option>2</option>
    <option>3</option>
    <option>5</option>
    <option>100</option>
  </select>
  <span>Выбрано: {{ selected }}</span><span>choiceCat = {{ choiceCat }}</span><span>Количество товара {{amountAllItems }}</span>
  <!-- <span>{{ comtest }}</span> -->
</div>
</template>

<script >




export default {
data(){
return {
  products : [{}],
 pageNow : usePageStore(),
 choiceCat : useCategory(),
 numPage:1,
 selected:3,//максимальное колличество товара на странице выбор
 //tt:[],
 amountAllItems:null,//колличество всего товара этой категории

}
},
created:async function(){
await this.countPage()
await this.choice()


},
watch:{
  choiceCat(){ 
    this.choice()
  //  let tt = this.products.filter(qq =>"all"==this.choiceCat||qq.category==this.$data.choiceCat) 
  //    this.amountAllItems = tt.length
console.log("!!! choiceCat() "+  this.amountAllItems)
},
selected() {
  this.choice()
}
},
// computed:{
//  comtest (){
//   this.tt.length==0
//   ?this.countPage().length 
//   :100
//  }
// },

methods:{
async countPage (){
   // console.log ("numPage!!! "+ this.numPage)
    const { data:products } = await useFetch('https://fakestoreapi.com/products')
    this.products = products.value
    // await choice()

},
async  choice(){ 
   let  tt = this.products.filter(qq =>"all"==this.choiceCat||qq.category==this.$data.choiceCat) 
   this.amountAllItems = tt.length
console.log("!!!choice() "+  this.amountAllItems)
this.getAmountPage()
// console.log('choice(3) ')
  // return tt.length
   // console.log("tttee!!!"+JSON.stringify (this.products))

},
  getAmountPage(){
  let ii=this.amountAllItems/this.selected
  let match1 = Math.ceil(ii)
//   console.log('getAmountPage()!!! '+match1+' || typeof '+ typeof(match1))
  
//   // let match1 = Math.ceil(ii)
//   console.log('getAmountPage(2)!!! '+match1)
  this.numPage= this.pageNow =  match1



 }
  
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
ul{
  display: flex;
  flex-direction: row;
  list-style: none;
}
ul li {
  padding-left:10px;
}
/* .for-cart{
  vertical-align: top;
} */
</style>