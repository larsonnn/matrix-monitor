<script setup>
import mx from "../libs/matrix";
</script>
<template>
    <nav>
        <router-link to="/">Home</router-link> | <a href="#" @click="() => mx.logout()">Logout</a>
    </nav>
</template>