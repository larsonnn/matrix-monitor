<template>
    <div>
        <slot />
    </div>
</template>

<style scoped>
div {
    width: 240px;
    margin: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

div :deep(input) {
    width: 100%;
    padding: .5rem;
}

div :deep(label) {
    margin-bottom: 12px;
    display: block;
}

@media (prefers-color-scheme: dark) {
    div :deep(*) {
        color: hwb(0 86% 14%);
    }

    div :deep(input) {
        border: 1px solid #30363d;
        background-color: #010409;
        font-family: monospace;
    }
}
</style>