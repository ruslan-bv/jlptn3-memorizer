<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    kanjiList: any
}>()

console.log(props.kanjiList)
const cardCovers = props.kanjiList.map((kanji: any) => Object.keys(kanji)[0]);
console.log(cardCovers)
const cards = ref(cardCovers)

console.log(cards.value)
console.log(typeof cards.value)
</script>

<template>
    <div class="grid">
        <template v-for="card in cards">
            <div class="grid-element">
                <span class="letter">{{ card }}</span>
            </div>
        </template>
    </div>
</template>

<style scoped lang="scss">
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 20px 50px;
}

.grid-element {
    display: grid;
    padding: 10px;
    border: 1px solid black;
    width: 100px;
    height: 100px;
}

.letter {
    display: block;
    margin: auto;
    font-size: 3em;
}
</style>