<script setup>
import { isProxy, toRaw } from 'vue';
import { eventStore } from '../../store';
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>type</th>
                <th>event id (click to log)</th>
                <th>checked in</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="event in eventStore.events">
                <td>{{ event.name }}</td>
                <td>{{ event.type }}</td>
                <td class="clickable" @click="() => $emit('show', event.parameters?.event)">{{
                    event.parameters?.event?.event_id
                    ||
                    "ROOM (no event given)" }}</td>
                <td>{{ event.checkInTs }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    emits: ['show'],
}
</script>


<style>
.clickable {
    cursor: pointer;
}
</style>