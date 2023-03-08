<script setup>
import { matrixStore, appStore } from './store';
import mx from './libs/matrix'
import NavBar from './components/NavBar.vue';
import RouteContainer from './components/RouteContainer.vue'
import LoginView from './views/LoginView.vue';
</script>

<template>
  <div v-if="appStore.state !== 'created'"></div>
  <main v-else>
    <NavBar v-if="matrixStore.isLoggedIn" />
    <RouteContainer>
      <LoginView v-if="!matrixStore.isLoggedIn" />
      <router-view v-else />
    </RouteContainer>
  </main>
</template>

<script>
export default {
  beforeCreate() {
    const authData = JSON.parse(localStorage.getItem("mon_auth"));
    if ((!mx.client || !mx.client.isLoggedIn()) && authData && authData?.home_server) {
      mx.loginWithToken(authData).then(() => {
        matrixStore.isLoggedIn = true;
        matrixStore.auth = authData;
        appStore.state = 'created'
      })
    }
  },
}
</script>

<style>
@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
  }
}
</style>