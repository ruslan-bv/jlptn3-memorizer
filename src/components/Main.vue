<script setup lang="ts">
import Grid from './Grid.vue';
import jlptN3list from '../data/jlptN3list.json';
const title = "JLPT N3 Memorizer!"

</script>

<template>
    <div>
        <header class="dashboard">
            <h2>{{ title }}</h2>
        </header>
        <Grid :kanjiList="jlptN3list" />
    </div>
</template>

<style scoped>
h2 {
    /* margin: 0 auto; */
    text-align: center;
    font-size: 2em;
}
.dashboard {
    /* top: 10%; */
    left: 50%;
    transform: translate(-50%, -50%);
    /* margin: 0 auto; */
    border-bottom: 1px solid #00A746;
}
</style>