<template>
    <h1>carddd</h1>
    <p v-for="i of cardG" :key="i.id">
   name {{ i.name }} cod {{ i.codproduct }} штук {{ i.amount }}
    </p>
</template>

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
