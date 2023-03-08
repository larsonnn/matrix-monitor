<script setup>
import EventContainer from '../components/Events/EventContainer.vue';
import { eventStore } from '../store';
</script>
<template>
    <h1>Events</h1>
    <EventContainer description="Room" name="room" :items="eventStore.events.filter(e => e.type === 'room')" />
    <EventContainer description="User" name="user" :items="eventStore.events.filter(e => e.type === 'user')" />
</template>