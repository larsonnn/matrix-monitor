<template>
    <label for="">{{ label }}</label>
    <input type="password" v-bind:value="value" autocomplete="current-password"
        @change="$event => $emit('change:input', $event.target.value)" />
</template>

<script>
export default {
    props: ['label', 'value'],
    emits: ['change:input']
}
</script>

<style scoped></style>