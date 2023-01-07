<template>
    <div class="flex h-screen w-full">
      <div class="m-auto">
        <section class="h-screen">
          <div class="container">
            <div
              class="11"
            >
              <div class="12">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  class="13"
                  alt="Phone image"
                />
              </div>
              <div class="14">
                <div v-if="_error">
                  <p class="15">
                    {{ _error }}
                  </p>
                </div>
                <form @submit.prevent="onSubmit">
                  <!-- Email input -->
                  <div class="m1">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email address"
                      v-model="form.email"
                    />
                  </div>
  
                  <!-- Password input -->
                  <div class="mb-6">
                    <input
                      type="password"
                      class="p1"
                      placeholder="Password"
                      v-model="form.password"
                    />
                  </div>
  
                  <!-- Submit button -->
                  <button
                    type="submit"
                    class="b1"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <span v-if="isLoading">Loading...</span>
                    <span v-else>Sign in</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const url = "https://reqres.in/api/login";
  
  const isLoading = ref(false);
  const _error = ref(null);
  
  const form = reactive({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  
  async function onSubmit() {
    if (isLoading.value) return;
  
    isLoading.value = true;
    const { data, error } = await useFetch(url, {
      method: "post",
      body: form,
    });
  
    isLoading.value = false;
    if (error.value) {
      _error.value = error.value.data.error;
      return;
    }
  
    const auth = useAuth();
    auth.value.isAuthenticated = true;
    navigateTo("/");
  }
  </script>