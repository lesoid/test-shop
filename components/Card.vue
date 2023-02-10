<template>
<div class=" card-container" style="background-color: aqua ; border: 1px solid blueviolet;">
  <div v-for="i of cardG" :key="i.id" class="card__item" style="background-color:aquamarine ; border: 1px solid blueviolet;">
<a class="card__preview" href="">
  <img class="card__pic" :src="`${i.image}`" alt="img">
</a>
<div class="card__detal" style="background-color:gray ; border: 1px solid blueviolet;"> 
  <div class="card__caption">
    <div class="card__code">Код товара: <span>{{  i.codproduct }}</span></div>
    <a class="card__title" href="">{{ i.name }}</a>
    <div class="card__price"><div class="card__price-actual">not price to base</div></div>
  </div>
  <div class="card__control">
    <div class="counter">
      <button class="counter__btn counter__btn_minus js-counter-minus" type="button">-</button>
      <input class="counter__input js-counter-input" type="text" value="1" size="3" readonly>
      <button class="counter__btn counter__btn_plus js-counter-plus" type="button">+</button></div>
    <div class="card__sum"><div class="card__total"><span class="product__total">sum product</span>

    </div></div>
  </div>
</div>
  <div class="card__options" style="background-color:olive ; border: 1px solid blueviolet;">
  

</div>
</div>
</div>


    <h1>carddd</h1>
    <p v-for="i of cardG" :key="i.id">
   name {{ i.name }} cod {{ i.codproduct }} штук {{ i.amount }}
    </p>
</template>

<style scoped>
.card__item{
  display: flex;
}
.card__control{
  display: flex;
}
.card__preview{
  position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 140px;
    height: 140px;
    font-size: 0;
}
.card__detal{
  display: flex;
}
a{
  background-color: transparent;
    text-decoration: none;
}
.card__pic{

  max-width: 100%;
  max-height: 100%;
}
.counter {
    position: relative;
    display: inline-block;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100px;
    overflow: hidden;
}
</style>




<script lang="ts">
import { IUser } from "~/types/IUser";
import { defineComponent } from 'vue'
import { getCard } from '~/composables/useCard'
//import type { Ref } from 'vue'

export default defineComponent({
    data(){
        return{
            cardG:<ICard[]>[]
        }
    },
    created: function(){
    this.getT()
  },
  methods:{
    async  getT() {
   try {
   console.log("!!! Card START ")
  const user = useState<IUser | null>('user')
    if (user === null||user === undefined){
        console.log("!!!Card components user null")
      }else{
        if (typeof (user.value?.username) == "string")  {
        let   card = await getCard(user.value.username) 
             if (card){
              this.cardG = card
              console.log("!!!Card components JSON "+JSON.stringify(card))
             }
            }}
  
   } catch (error) {
  console.log("!!! Card error "+error)
   }
   
  // console.log("!!! Card Fin ")
  // return product
}
  },
    // async setup() {
       
    // //let  cardG: Ref <ICard[]|undefined|null> = ref()
    //     const cardG = defineProps<{
    //             card: []}>()
    //    // const ref: <ICard[] | null>() => Ref<ICard[] | null | undefined>// (+2 overloads)
    //  // const year: Ref<string | number> = ref('2020')
    //   const user = useState<IUser | null>('user')
    //   if (user === null||user === undefined){
    //     console.log("!!!Card components user null")
    //   }else{
    //     if (typeof (user.value?.username) == "string")  {
    //       let   card = await getCard(user.value.username) 
    //          if (card){
    //         //  cardG.value = card
    //          // cardG = defineProps<ICard[]>(card)
    //          }
             
    //         console.log("!!!Card components "+JSON.stringify( cardG)) 
 
    //     }else{
    //         console.log("!!!Card components user.value?.username string not")
    //     }
    //     }
      
    // },
})
</script>
