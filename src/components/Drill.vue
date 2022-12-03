<script setup lang="ts">
import { ref, reactive } from 'vue';
import { kanjiStore } from '../store/kanjiStore';

const isCardSelected = ref(false);

const currentCardSet = reactive(kanjiStore.currentKanjiDeck);
const selectionToShow = Object.values(currentCardSet)[0];

const selectCard = (e: Event) => {
    e.stopPropagation();
    
    const selectedCards = document.querySelectorAll('.card');
    selectedCards.forEach((card) => card.classList.remove('card-selected'));

    const target = e.target as Element;
    const parentDiv = target.closest('div');
    parentDiv?.classList?.add('card-selected');
    isCardSelected.value = true;
}

const deselectCard = (e: Event) => {
    e.stopPropagation();

    const selectedCards = document.querySelectorAll('.card');
    selectedCards.forEach((card) => card.classList.remove('card-selected'));

    isCardSelected.value = false;
}

</script>

<template>
<div class="drill">
    <div class="container" @click="deselectCard">
        <div class="cards">
            <template v-for="card in selectionToShow">
                <div class="card" @click="selectCard">
                    <span class="front-side">{{ Object.keys(card)[0] }}</span>
                </div>
            </template>
        </div>
        <div class="navigation">
            <button v-if="isCardSelected" class="select">SELECT</button>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.card {
    display: grid;
    padding: 10px;
    border-bottom: 1px solid black;
    width: 200px;
    height: 250px;
}

.card-selected {
    border: 10px solid #9AD5A1;
    border-radius: 5px;
}

.cards {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.drill {
    width: 800px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -200px 0 0 -400px;
    border: 2px solid #05652d;
}

.front-side {
    display: block;
    margin: auto;
    font-size: 8em;
    font-weight: 400;

    &:hover {
        font-weight: 600;
    }
}

.navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
}

.select {
    width: 100px;
    height: 50px;
    background-color: #9AD5A1;
    font-weight: 600;
    border-radius: 3px;
}
</style>