<template>
    <input type="submit" v-bind:value="text" />
</template>

<script>
export default {
    props: ['text'],
}
</script>
<style scoped></style>