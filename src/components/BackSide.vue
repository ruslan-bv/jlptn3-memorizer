<script setup lang="ts">
import { ref } from 'vue';
    const props = defineProps<{
        letter: String;
        selectedCard: any;
    }>()

    const cardProps: any = ref(Object.values(props.selectedCard)[0]);
</script>

<template>
    <div class="card">
        <h3>{{ letter }}</h3>
        <span>meanings: {{ cardProps.meanings.map((word: string) => word.toLowerCase()).join(', ') }}</span>
        <span class="tiny-text">onyomi: {{ cardProps.readings_on.join(', ') }}</span>
        <span class="tiny-text">kunyomi: {{ cardProps.readings_kun.join(', ') }}</span>
        <span class="tiny-text">strokes: {{ cardProps.strokes }}</span>
    </div>
</template>

<style scoped lang="scss">
h3 {
    font-size: 2em;
    text-align: center;
    border-bottom: 1px solid #00A746;
    margin-bottom: 5px;
}
.card {
    display: flex;
    flex-direction: column;
}

.tiny-text {
    font-size: 0.9em;
}
</style>