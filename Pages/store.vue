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
    <button v-for="i in amountPage" :key="i"
     type="button" 
     :disabled="pageNow === i"
      class="bt" 
      @click="transitionPage(i)"> {{ i }}
    </button>
</nav>
<div id="v-model-select" class="demo">
  <select v-model="selected">
    <option disabled value="">товаров на странице</option>
    <option>2</option>
    <option>3</option>
    <option>5</option>
    <option>10</option>
  </select>
  <br>
  <span>Выбрано: {{ selected }}</span>
  <br>
  <span>page: {{ pageNow }}</span>
  <br>
  <span>Category = {{ choiceCat }}</span>
  <br>
  <span>Количество товара {{amountAllItems }}</span>
  <!-- <span>{{ comtest }}</span> -->
</div>
</template>

<script >
export default {
data(){
return {
  
  activeColor: 'red',
 

  products : [{}],
  productsfiltr : [{}],
 pageNow : usePageStore(),
 choiceCat : useCategory(),
//  numPage:1,
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

methods:{
  transitionPage(i){
  //  this.numPage=i
   this.pageNow=i
   console.log(" transitionPage !!! i= "+i)
   this.getProdFilter()
  },

  async  getProdFilter(){
    console.log(" getProdFilter() begin!!!  ")
 let prod=[];
  if(this.choiceCat !== 'all'){
  prod = this.products.filter(qq =>qq.category==this.choiceCat) 
  }else{
     prod = this.products
   
  } 
 let i = 0;
 let arr=[];
 let propusk = this.pageNow * this.selected-this.selected;
 let enougt = this.pageNow * this.selected;
 while (i < 2000){
  if (i>= enougt ||prod.length == i){
    this.productsfiltr = arr
    break;
  }else if(i>= propusk){
  arr.push(prod[i])
  // console.log("  getProdFilter() arr.push!!! "+prod[i].title)
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
  // this.numPage=1
   this.pageNow=1
   let  tt = this.products.filter(qq =>"all"==this.choiceCat||qq.category==this.$data.choiceCat) 
   this.amountAllItems = tt.length
// console.log("!!!choice() amountAllItems = "+  this.amountAllItems)
// console.log("!!!choice() selected = "+  this.selected)
this.getAmountPage()
},

  getAmountPage(){
  let ii=this.amountAllItems/this.selected
  let match1 = Math.ceil(ii)
  this.amountPage =  match1
} 
},

setup (){
useHead({
  title: 'Store ',
  lang:'en',
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
button :active {
  color: red;
}
 .router-link-exact-active {
    color: #12b448;
  }
  button.bt {
    border:2px solid #cd9e79; 
    border-radius: 5px;
    margin-left: 8px;
  }
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