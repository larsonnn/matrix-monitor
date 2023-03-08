import { createRouter, createWebHistory } from 'vue-router'
import Home from "./views/HomeView.vue";
import Login from "./views/LoginView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
  ],
})
