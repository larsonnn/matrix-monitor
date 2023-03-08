<script setup>
import NavBar from './components/NavBar.vue';
import RouteContainer from './components/RouteContainer.vue'
</script>

<template>
  <main>
    <NavBar />
    <RouteContainer>
      <router-view />
    </RouteContainer>
  </main>
</template>

<style>
@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
  }
}
</style>