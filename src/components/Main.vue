<script setup lang="ts">
import jlptN3list from '../data/jlptN3list.json';
const title = "JLPT N3 Memorizer!"

console.log(jlptN3list)
</script>

<template>
    <div class="dashboard">
        <h2>{{ title }}</h2>
    </div>
</template>

<style scoped>
h2 {
    /* margin: 0 auto; */
    text-align: center;
    font-size: 2em;
}
.dashboard {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* margin: 0 auto; */
}
</style>