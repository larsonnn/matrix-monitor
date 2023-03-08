<script setup>
import { appStore } from "../../store"
</script>

<template>
  <div class="dropdown">
    <button @click="this.toggle">{{ description }} - {{ items.length }}</button>
    <div class="dropdown-content" v-bind:style="{ display: appStore.openDropdown === name ? 'block' : 'none' }">
      <ul>
        <li v-for="item, i in items" :key="i">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template >

<script>
export default {
  props: ['items', 'description', 'name'],
  methods: {
    toggle() {
      appStore.openDropdown = appStore.openDropdown !== this.name ? this.name : ''
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  max-height: 20vh;
  overflow: scroll;
}
</style>