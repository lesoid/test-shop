<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { loginWithEmail } from "~/composables/useAuth";
import type { Ref } from "vue";

const usernameOrEmail = ref("");
const password = ref("");

const errors: Ref<Map<string, { message: InputValidation }> | undefined> = ref(
  new Map<string, { message: InputValidation }>()
);
let response: FormValidation;

async function postLoginForm() {
  response = await loginWithEmail(usernameOrEmail.value, password.value);
  errors.value = response.errors;
}
definePageMeta({
  middleware: ["guest"],
  layout: "registration",
});
</script>

<template>
  <div class="dark:bg-black h-screen">
    <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div class="lg:flex mt-10">
          <!-- <img class="mx-auto h-24 w-auto" src="/img/logo_clear_fsj.png" alt="full stack jack logo" /> -->
       
        </div>
        <div>
          <h2
            class="
            
            "
          >
            Sign In
          </h2>
        </div>
        <div
          v-if="response?.hasErrors && errors"
          class="
         
          "
          role="alert"
        >
          <ul class="block sm:inline">
            <!--  errors это MAP коллекция ключ/значение, -->
            <li v-for="val of errors.values()" :key="val.message.value">
              {{ val.message }}
            </li>
          </ul>
        </div>
        <div class="form-box">
        <form
          v-on:submit.prevent class="mt-8 space-y-6" action="#" method="POST" @keyup.enter="postLoginForm"
        >
          <!-- @keyup.enter="postLoginForm  форма отправляется при нажатии на ENTER-->
          <div class="rounded-md shadow-sm -space-y-px mb-1">
            <div>
              <label for="email-address" class="sr-only"
                >Username or Email</label
              >
              <input
                type="email" v-model="usernameOrEmail"  id="username"   required   class="email"
                :class="errors?.has('username') ? ' border-red-500' : ''"
                placeholder="username"
              />
            </div>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="password" id="password" name="password" type="password" autocomplete="current-password"
              required class="passs" :class="errors?.has('password') ? ' border-red-500' : ''" placeholder="Password"
            />
          </div>
        </form>
        <button @click.prevent="postLoginForm" class="close">
          <span class="clos">
            <!-- Heroicon name: solid/lock-closed -->
            <svg
              class=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          register
        </button>
      </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.passs{
  margin-left: 102px;
}
.email{
  margin-left: 20px;
}
.sr-only{
  margin-left: 20px;
  font-size: 1.3em;
}
.close{
  padding: 0 20px;
    margin: -6px 111px;
}
.form-box{
  display: flex;

}
h2{
  text-align: center;
}
</style>
