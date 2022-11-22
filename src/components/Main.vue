<script setup lang="ts">
import { ref } from 'vue';
import Grid from './Grid.vue';
import Drill from './Drill.vue';
import { selectRandomKanjiCards } from '../helpers/helpers';
import jlptN3list from '../data/jlptN3list.json';

const title = "JLPT N3 Memorizer: Learn and Master Kanji!"

const challengeDifficulty = 10;
const randomCardList = ref();

const buildRandomCardList = () => {
    const cardArray = selectRandomKanjiCards(jlptN3list, challengeDifficulty);
    randomCardList.value = cardArray;
}

buildRandomCardList();

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
                <router-link :to="{ name: 'drill' }" v-slot="{ navigate }">
                <button @click="navigate">Drill Challenge!</button>
                </router-link>
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