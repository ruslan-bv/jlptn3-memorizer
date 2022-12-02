<script setup lang="ts">
import { ref } from 'vue';
import Grid from './Grid.vue';
import { selectRandomKanjiCards } from '../helpers/helpers';
import jlptN3list from '../data/jlptN3list.json';
import { kanjiStore } from '../store/kanjiStore';

const title = "JLPT N3 Memorizer: Learn and Master Kanji!"

const challengeDifficulty = 10;
const randomCardList = ref();

const buildRandomCardList = () => {
    const cardArray = selectRandomKanjiCards(jlptN3list, challengeDifficulty);
    randomCardList.value = cardArray;
    kanjiStore.currentKanjiDeck = randomCardList.value;
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

<style scoped lang="scss">
button {
    height: 50px;
    width: 200px;
    font-size: 1.5em;
    background-color: white;
    border: 2px solid black;
    box-shadow: 0 9px #9AD5A1;
    border-radius: 10px;
    border: 1px solid #666;
    outline: none;

    &:active {
        background-color: #3e8e41;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }

    &:hover {
        color: white;
        background-color: #00A746;
    }
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