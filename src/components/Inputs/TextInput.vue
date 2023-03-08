<template>
    <label for="">{{ label }}</label>
    <input type="text" v-bind:value="value" v-bind:autocomplete="autocomplete"
        @change="$event => $emit('change:input', $event.target.value)" />
</template>

<script>
export default {
    props: ['label', 'autocomplete', 'value'],
    emits: ['change:input']
}
</script>

<style scoped></style>