<template>
  <div
    class="card-container"
  
  >
    <div
      v-for="i of cardG"
      :key="i.id"
      class="card__item"
    >
      <a class="card__preview" href="">
        <img class="card__pic" :src="`${i.product?.image}`" alt="img" />
      </a>
      <div
        class="card__detal bg"
       
      >
        <div class="card__caption">
          <div class="card__code">
            Код товара: <span>{{ i.product?.codeproduct }}</span>
          </div>
          <a class="card__title" href="">
            <span><strong>{{ i.product?.title }} </strong> </span> :
            <span>{{ i.product?.description }}</span></a
          >
          <div class="card__price">
            <div class="card__price-actual">{{ i.product?.price }} $</div>
          <div class="card__price-actual"> -id {{ i.id }}</div> 
          </div>
        </div>
        <div class="card__control">
          <div class="counter">
            <button
            @click="iterateCount(i.id, i.amount,-1)"
              class="counter__btn counter__btn_minus js-counter-minus"
              type="button"
            >
              -
            </button>
            <input
            v-model="i.amount" 
              class="counter__input js-counter-input"
              type="text"
              size="3"
              readonly
            />

            <button
            @click="iterateCount(i.id, i.amount,1)"
              class="counter__btn counter__btn_plus js-counter-plus"
              type="button"
            >
              +
            </button>
          </div>
          <div
            class="card__sum"
            
          >
            <div
              class="card__total"
              v-if="i.product?.price !== undefined && i.amount !== null"
            >
              <span class="product__total">
                Sum {{ i.product.price * i.amount }}$</span
              >
            </div>
            <div class="card__total" v-else>
              <span class="product__total"> Not Amount </span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="card__options bg"
        @click="deliteProdFromCart(i.id)"
      >
        <a href="#" class="card__options_a">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            fill="none"
            viewBox="0 0 17 18"
          >
            <path
              fill-rule="evenodd"
              d="M6.16 1.5c.205-.216.478-.333.757-.333h3.167c.28 0 .552.116.757.333s.326.517.326.834V3.5H5.833V2.333c0-.317.12-.617.326-.834zm-1.326 2V2.333c0-.567.214-1.115.6-1.523s.92-.644 1.482-.644h3.167c.56 0 1.094.235 1.482.644s.6.956.6 1.523V3.5h3.458a.5.5 0 1 1 0 1h-1.083v11.167c0 .567-.214 1.115-.6 1.523s-.92.644-1.482.644H4.542c-.56 0-1.094-.235-1.482-.644s-.6-.956-.6-1.523V4.5H1.375a.5.5 0 1 1 0-1h3.458zM3.458 15.667V4.5h10.083v11.167c0 .317-.12.617-.326.834s-.478.332-.757.332H4.542c-.28 0-.552-.116-.757-.332s-.326-.517-.326-.834zm3.458-8a.5.5 0 0 1 .5.5v5a.5.5 0 1 1-1 0v-5a.5.5 0 0 1 .5-.5zm3.667.5a.5.5 0 1 0-1 0v5a.5.5 0 1 0 1 0v-5z"
              fill="black"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>

  <!-- <h1>carddd</h1>
  <p v-for="i of cardG" :key="i.id"> -->
    <!-- name {{ i.product }} cod {{ i.amount}} штук -->
    <!-- <br />
    {{ i }}
  </p> -->
</template>

<style scoped>
div {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  outline: 0;
}
button {
  appearance: auto;
  writing-mode: horizontal-tb !important;

  text-rendering: auto;

  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  /* box-sizing: border-box; */

  margin: 0em;
  padding: 1px 6px;
  /* border-width: 2px; */
  border-style: outset;
  border-color: buttonborder;
  border-image: initial;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
.counter__btn {
  position: absolute;
  top: 2px;
  bottom: 2px;
  z-index: 2;
  width: 27px;
  min-width: 27px;
  padding: 0;
  font-size: 18px;
  font-weight: 700;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: none;
  background: none;
  color: black;
  -webkit-transition: color 0.25s;
  -o-transition: color 0.25s;
  transition: color 0.25s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  /* padding-left: 10px; */
}
.counter__btn_minus {
  left: 10px;
  top: 1px;
}
.counter__btn_plus {
  right: 10px;
  top: 2px;
}
.card__title {
  display: block;
  max-height: 69px;
  overflow: hidden;
  margin-bottom: 12px;
  line-height: 1.5;
  max-width: 500px;
  transition: color 0.25s;
}

.counter__input {
  width: 100%;
  height: 40px;
  padding: 0 30px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;
  box-sizing: border-box;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  text-align: center;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  color: black;
}
input {
  line-height: normal;
}
.card__item {
  display: flex;
  background-color:white; 
  /* border: 1px solid blueviolet; */
  margin-bottom: 1px;
}

.card__control {
  display: flex;
}
.card__options_a svg {
  margin-right: 12px;
}

.card__preview {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  font-size: 0;
}
.card__preview a {
 background-color: transparent;
}
.card-container{
  background-color: #f3eee9;
}
.bg{
  background-color: #f3eee9;
}
.card__detal {
  display: flex;
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding-left: 40px;

}
.card__caption {
  text-align: left;
}
.card__code {
  margin-bottom: 16px;
  font-size: 14px;
}
.card__title {
  display: block;
  max-height: 69px;
  overflow: hidden;
  margin-bottom: 12px;
  line-height: 1.5;
  color: rgb(0, 0, 0);
}
.card__price {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #e5b01b;
}
.card__control {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: 40px;
}
.counter {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  width: 100px;
  overflow: hidden;
}

a {
  background-color: transparent;
  text-decoration: none;
}

.card__pic {
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
.card__sum {
  position: relative;
    padding-left: 60px;
    color: black;
    font-weight: 600;
}
.card__options {
  display: flex;
  align-items: center;
  /* flex-direction: row; */
  justify-content: space-around;
  width: 50px;

}
</style>




<script lang="ts">
import { IUser } from "~/types/IUser";
import { defineComponent } from "vue";
import { getCard ,updateCard,delFromCart} from "~/composables/useCard";
import { ICard } from "~~/types/ICard";
import { IProduct } from "~~/types/IProduct";
import { number } from "zod";

export default defineComponent({
  data() {
    return {
      cardG: <ICard[]>{},
    };
  },
  created: function () {
    this.getT();
  },

  methods: {
    async getT() {
      try {
        console.log("!!! Card START ");
        const user = useState<IUser | null>("user");
        if (user === null || user === undefined) {
          console.log("!!!Card components user null");
        } else {
          if (typeof user.value?.id == "number") {
            // let card = await getCard(user.value.username)
            let card = await getCard(user.value.id);
            if (card) {
              this.cardG = card;
              // console.log(
              //   "!!!Card components JSON  image" +
              //     JSON.stringify(card[1].product)
              // );
              // console.log("!!!Card components JSON " + JSON.stringify(card));
            }
          }
        }
      } catch (error) {
        console.log("!!! Card error " + error);
      }

      // console.log("!!! Card Fin ")
      // return product
    },
   async iterateCount(y:number,u:number|null,z:number){
    if (u == null)return alert(" func iterateCount -- Count Null")
    let card = await updateCard(y , u + z);
    this.getT()
    return card
   },
   async deliteProdFromCart(idProdCart:number){
    let card = await delFromCart(idProdCart)
    this.getT()
    return card
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
});
</script>
