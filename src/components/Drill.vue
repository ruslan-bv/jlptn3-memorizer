<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    deck: any
}>()
console.log(props)
const currentCardSet = ref(props.deck);
console.log(currentCardSet)
</script>

<template>
<div class="drill">
    <div class="container">
        <div class="cards">

        </div>
        <div class="navigation">
            test
        </div>
    </div>
</div>
</template>

<style>
.drill {
    width: 500px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -250px;
    border: 1px solid black;
}

.container {
    height: 100%;
    width: 100%;
}
</style>