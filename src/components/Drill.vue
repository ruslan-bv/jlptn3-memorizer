<script setup lang="ts">
import { ref, reactive } from 'vue';
import { kanjiStore } from '../store/kanjiStore';
const currentCardSet = reactive(kanjiStore.currentKanjiDeck);
const selectionToShow = Object.values(currentCardSet)[0];

const selectCard = (e: Event) => {
    e.stopPropagation();
    
    const selectedCards = document.querySelectorAll('.card');
    selectedCards.forEach((card) => card.classList.remove('card-selected'));

    const target = e.target as Element;
    const parentDiv = target.closest('div');
    parentDiv?.classList?.add('card-selected');
}

</script>

<template>
<div class="drill">
    <div class="container">
        <div class="cards">
            <template v-for="card in selectionToShow">
                <div class="card" @click="selectCard">
                    <span class="front-side">{{ Object.keys(card)[0] }}</span>
                </div>
            </template>
        </div>
        <div class="navigation">
            test
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.card {
    display: grid;
    padding: 10px;
    border: 1px solid #00A746;
    width: 200px;
    height: 250px;
}

.front-side {
    display: block;
    margin: auto;
    font-size: 8em;
}

.card-selected {
    border: 2px solid blue;
}

.cards {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.container {
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
</style>