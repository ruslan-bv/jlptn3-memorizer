<script setup lang="ts">
import { ref } from 'vue';
import BackSide from './BackSide.vue';
const props = defineProps<{
    kanjiList: any
}>()

const kanjiList = ref(props.kanjiList);
const cardCovers = props.kanjiList.map((kanji: any) => Object.keys(kanji)[0]);
// const cards = ref(cardCovers)

const selectedCard = ref(null);
const selectedLetter = ref('');
const showDescription = (e: Event) => {
    const element = e.target as HTMLInputElement;
    const text = element.textContent || '';
    const selectedKanji = kanjiList.value.find((kanji: any) => Object.keys(kanji)[0] === text);
    selectedLetter.value = text;
    selectedCard.value = selectedKanji;
}

</script>

<template>
    <div class="grid">
        <template v-for="card in kanjiList">
            <div id="card" class="grid-element" @click="showDescription">
                <div v-if="selectedCard && selectedLetter === Object.keys(card)[0]">
                    <BackSide :letter="selectedLetter" :selectedCard="selectedCard" />
                </div>
                <span v-else class="front-side">{{ Object.keys(card)[0] }}</span>
            </div>
        </template>
    </div>
</template>

<style scoped lang="scss">
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px 30px;
}

.grid-element {
    display: grid;
    padding: 10px;
    border: 1px solid #00A746;
    width: 220px;
    height: 250px;
    transition: all 1s ease-out;
}

.grid-element:active {
    background-color: black;
}

.front-side {
    display: block;
    margin: auto;
    font-size: 7em;
}
</style>