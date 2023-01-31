<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { registerWithEmail } from "~/composables/useAuth";
import type { Ref } from "vue"



const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const username: Ref<string> = ref('');
const name: Ref<string> = ref('');
//errors = создаеется пустая карта Ref<пустая|undefined>
const errors: Ref<Map<string, { message: InputValidation; }> | undefined> = ref(new Map<string, { message: InputValidation }>())
 let response: FormValidation

async function postRegisterForm() {
  response = await registerWithEmail(username.value, name.value, email.value, password.value);
  errors.value = response.errors
}
definePageMeta({
 middleware: ["guest"],
  layout:"registration"
})

</script>
<template>
  <div class="">
    <div class="">
      <div class="">
        <div class="">
          <!-- <img class="mx-auto h-24 w-auto" src="/img/logo_clear_fsj.png" alt="full stack jack logo" /> -->
          <h1 class="py-9 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-400">
            Full Stack Jack
          </h1>
        </div>
        <div>
          <h2 class="" style="display:inline-block">
            Sign Up
          </h2>
        </div>
        <!-- Проверяет есть ли ошибки при заполнении формы -->
        <div v-if="response?.hasErrors && errors" 
          class="errormessage" role="alert">
          <ul class="" style="display:inline-block">
            <li v-for=" value of errors.values()" :key=" value.message.value" >
              {{ value.message }}
            </li>
          </ul>
        </div> 
        <form v-on:submit.prevent class="" action="#" method="POST" @keyup.enter="postRegisterForm">
          <input type="hidden" name="remember" value="true" />
          <div class="">
            <div>
              <label for="name" class="sr-only">Name</label>
              <input v-model="name" id="name" name="name" required
                class=""
                :class="errors?.has('name') ? 'inputname' : ''" placeholder="Name" />
            </div>
          </div>
          <div class="">
            <div>
              <label for="email-address" class="sr-only">Username</label>
              <input type="email" v-model="username" id="username" name="username" required
                class=""
                :class="errors?.has('username') ? 'inputusername' : ''" placeholder="username" />
            </div>
          </div>

          <div class="">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required
                class=""
                :class="errors?.has('email') ? ' inputemail' : ''" placeholder="Email address" />
            </div>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
              required
              class=""
              :class="errors?.has('password') ? 'inputpassword' : ''" placeholder="Password" />
          </div>

          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div></div>
        </form>
        <button @click.prevent="postRegisterForm"
          class="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd" />
            </svg>
          </span>
          register
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.errormessage{border: 1px solid red;}
.inputname{ border: 1px solid red;}
.inputusername{ border: 1px solid red;}
.inputemail{ border: 1px solid red;}
.inputpassword{ border: 1px solid red;}
</style>