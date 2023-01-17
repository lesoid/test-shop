export default defineNuxtRouteMiddleware(() => {
    const auth = useAuth();
    if (auth.value.isAuthenticated) {
      console.log("MIDDLEWARE !! Проверка")
    } else {
      alert("Авторизуйтесь для перехода на эту страницу")
    }
    return auth.value.isAuthenticated;
  });