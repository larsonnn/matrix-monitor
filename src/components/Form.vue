<template>
    <form @submit="($event) => {
        $event.preventDefault();
        $emit('submit');
    }">
        <div>
            <slot />
        </div>
    </form>
</template>
<script>
export default {
    emits: ['submit']
}
</script>
<style scoped></style>