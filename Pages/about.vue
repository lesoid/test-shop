<template>
 
  <div class="container-card">
    <div class="for-cart" v-for="p of productsfiltr" :key="p">
      <div class="for-main"  >
       <!-- <p>{{ p.id }}" " {{pageNow= count++ }}" "{{pageNow  }}</p>  -->
      <ProductCard  :product="p" />
    </div>
    </div>
    
  </div>
  <nav>

<ul>{{ numPage }}
  <li  v-for="i in amountPage" :key="i"> 
    <button   @click="numPage=i"> {{ i }}</button> </li>
  <!-- <li> <button   @click="numPage=1"> 1</button> </li>
  <li> <button    @click="numPage=2" > 2</button></li> -->
</ul>
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
  productsfiltr : [{}],
 pageNow : usePageStore(),
 choiceCat : useCategory(),
 numPage:2,
 selected:5,//максимальное колличество товара на странице выбор
 amountAllItems:null,//колличество всего товара этой категории
amountPage:1,//вычисленное количество страниц
}
},
created:async function(){
await this.countPage()
await this.choice()
await  this.getProdFilter()

},
watch:{
  async choiceCat(){ 
    await this.choice()
  //  let tt = this.products.filter(qq =>"all"==this.choiceCat||qq.category==this.$data.choiceCat) 
  //    this.amountAllItems = tt.length
console.log("!!! choiceCat() "+  this.amountAllItems)
await  this.getProdFilter()
},
async selected() {
  await  this.choice()
  await  this.getProdFilter()
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
  async  getProdFilter(){
 let prod=[];
  if(this.choiceCat !== 'all'){
  prod = this.products.filter(qq =>qq.category==this.choiceCat) 
   console.log(" prod if !!!"+prod)
  }else{
     prod = this.products
     console.log(" prod else !!!"+prod)
  } 
 let i = 0;
 let arr=[];
 let propusk = this.pageNow * this.selected-this.selected;
 let enougt = this.pageNow * this.selected;
 while (i < 2000){
  if (i>= enougt ||prod.length == i){
    this.productsfiltr = arr
  
}else if(i>= propusk){
  arr.push(prod[i])
}
 i++;
 }

},

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
  this.amountPage =  match1



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