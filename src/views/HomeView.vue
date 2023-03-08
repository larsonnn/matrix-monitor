<script setup>
import EventList from '../components/Events/EventList.vue';
import { eventStore } from '../store';
</script>
<template>
    <h1>Events</h1>
    <div class="eventsbox">
        <EventList description="Client" name="client" :items="eventStore.events.filter(e => e.type === 'client')" />
        <EventList description="Room" name="room" :items="eventStore.events.filter(e => e.type === 'room')" />
        <EventList description="User" name="user" :items="eventStore.events.filter(e => e.type === 'user')" />
        <EventList description="Poll" name="poll" :items="eventStore.events.filter(e => e.type === 'poll')" />
    </div>
</template>

<style scoped>
.eventsbox {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.eventsbox * {
    width: 15rem;
}
</style>