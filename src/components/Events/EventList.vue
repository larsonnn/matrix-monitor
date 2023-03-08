<template>
  <div>
    <button class="eventBtn" @click="toggle">{{ description }} - {{ items.length }}</button>
    <div v-if="items.length > 0" class="content" v-bind:style="{ display: clicked ? 'block' : 'none' }">
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
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    toggle() {
      this.clicked = !this.clicked
    }
  }
}
</script>

<style scoped>
.eventBtn {
  width: 100%;
}



.content {
  overflow: scroll;
  max-height: 70vh;
  width: 100%;
}
</style>