<script setup lang="ts">
import Grid from './Grid.vue';
import jlptN3list from '../data/jlptN3list.json';
const title = "JLPT N3 Memorizer: Learn and Master Kanji!"

</script>

<template>
    <div>
        <header class="dashboard">
            <h2>{{ title }}</h2>
            <!-- <div>
                <div>
                    <input placeholder="Type kanji" />
                </div>
            </div> -->
            <div>
                <button>Challenge!</button>
            </div>
        </header>
        <Grid :kanjiList="jlptN3list" />
    </div>
</template>

<style scoped>
button {
    height: 50px;
    background-color: #9AD5A1;
    border: none;
    /* color: */
}

header {
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

input {
    all: unset;
    height: 30px;
    border: 1px solid #00A746;
    border-radius: 5px;
    padding-left: 5px;
}

h2 {
    /* margin: 0 auto; */
    /* text-align: center; */
    font-size: 2em;
}
.dashboard {
    /* top: 10%; */
    /* left: 50%; */
    /* transform: translate(-50%, -50%); */
    /* margin: 0 auto; */
    border-bottom: 1px solid #00A746;
    margin-bottom: 10px;
}
</style>