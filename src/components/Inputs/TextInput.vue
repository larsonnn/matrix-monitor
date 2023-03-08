<template>
    <label for="">{{ label }}</label>
    <input type="text" @change="$event => $emit('change:input', $event.target.value)" />
</template>

<script>
export default {
    props: ['label'],
    emits: ['change:input']
}
</script>

<style scoped></style>