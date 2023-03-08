<template>
    <form @submit="($event) => {
        $event.preventDefault();
        $emit('submit');
    }">
        <slot />
    </form>
</template>
<script>
export default {
    emits: ['submit']
}
</script>
<style scoped></style>