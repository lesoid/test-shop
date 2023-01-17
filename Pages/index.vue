<template>
    <h1>Index</h1>
    <h2  :style="{color:contact?'red':'green'}">rrr</h2>
    <button :class="['bt',{active:contact}]" @click="contact = !contact" >DDD</button>
    <button @click="getCard">req</button>
    <hr>
    <h3 v-for="i of otvet " :key="i.id">{{ i.title }}</h3>
    <!-- <form id="form-contact"  type="submit">
        <h3>Введите email</h3>
        <div>
            <input type="email"
             placeholder="Email" 
             @submit.prevent="handleSubmit"
             v-model="email"
             >
        </div> -->
        <form @submit.prevent="handleSubmit">
                  <!-- Email input -->
                  <div class="m4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email address"
                      v-model="email"
                    />
                  </div>
                  <button  type="submit">Submit</button>
    </form>
  
</template>

<script >
export default {
    data(){
    return{
         email:'',
       contact:false,  
      otvet:[{}] 
    }
},
methods: {
   async getCard(){
       const {data:card}= await useFetch('/api/cart')
       console.log('index card = ' +JSON.stringify (card.value))
   this.otvet = card.value
    },
    async handleSubmit(){
        console.log('Values Submit'+this.email)
        const { data:res, error } = await useFetch('/api/cart', {
      method: "post",
      body:{
        em:this.email
      },
      params:{
        bod: this.email,
      }
      
    //   if (error) {
    //   _error.value = error.value.data.error;
    
      
    // }
    });
    console.log('Values Submit 2'+res)
    }
   
},

    // const email = ref('')
    // const { data, error } = await useFetch(url, {
    //   method: "post",
    //   body: form,
    // });
   
}
</script>

<style scoped>
.bt.active{
    background: red;
}
</style>


