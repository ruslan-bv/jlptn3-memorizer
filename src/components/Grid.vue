<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import BackSide from './BackSide.vue';
const props = defineProps<{
    kanjiList: any
}>()

const listForScroll = props.kanjiList.slice(10);
const kanjiList = ref(listForScroll);
const initialList = props.kanjiList.slice(0, 10);
const visibleKanjiList = ref(initialList);
const scrollRef = ref();

const handleScroll = (e: Event) => {
    const scrollPosition = scrollRef.value;
    if (scrollPosition.getBoundingClientRect().bottom < window.innerHeight) {
        const newList = kanjiList.value.slice(0, 10);
        kanjiList.value.splice(0, 10);
        visibleKanjiList.value.push(...newList);
    }
}

const selectedCard = ref(null);
const selectedLetter = ref('');
const showDescription = (e: Event) => {
    e.stopPropagation();
    const element = e.target as HTMLInputElement;
    const text = element.textContent || '';
    const selectedKanji = props.kanjiList.find((kanji: any) => Object.keys(kanji)[0] === text);
    selectedLetter.value = text;
    selectedCard.value = selectedKanji;
}

const hideDescription = () => selectedCard.value = null;


onMounted(() => {
  window.addEventListener("scroll", handleScroll)
 })
 onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
 })
</script>

<template>
    <div class="grid" @click="hideDescription" ref="scrollRef">
        <template v-for="card in visibleKanjiList">
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
    transition: 1s;
}

.grid-element {
    display: grid;
    padding: 10px;
    border: 7px solid #00A746;
    border-radius: 5px;
    width: 220px;
    height: 250px;
    transition: all 1s ease-out;
}

.grid-element:hover {
    box-shadow: 0 0 20px black;
}

.grid-element:active {
    background-color: #68EDCB;
}

.front-side {
    display: block;
    margin: auto;
    font-size: 7em;
}
</style>