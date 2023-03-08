<script setup>
import { isProxy, toRaw } from 'vue';
import EventTable from '../components/Events/EventTable.vue';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
</script>
<template>
    <h1>Events</h1>
    <div class="split">
        <EventTable @show="setData" />
        <VueJsonPretty v-if="evt !== undefined" :data="evt" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            evt: undefined
        }
    },
    methods: {
        setData(evt) {
            this.evt = isProxy(evt) ? toRaw(evt) : evt;
        }
    }
}
</script>

<style scoped>
.split {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}
</style>