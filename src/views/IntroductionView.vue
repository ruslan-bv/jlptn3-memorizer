<script setup lang="ts">
const kanjiButtonTitle = 'Kanji';
const vocabButtonTitle = 'Vocabulary';
</script>

<template>
  <div>
    <h1>Welcome to JLPT N3 Study Area!</h1>
    <h3>Please choose what you want to master today:</h3>
    <div class="buttons">
        <router-link to="/kanji" v-slot="{ navigate }">
            <button @click="navigate">
                {{ kanjiButtonTitle }}
            </button>
        </router-link>
        <router-link to="/vocabulary" v-slot="{ navigate }">
            <button @click="navigate">
                {{ vocabButtonTitle }}
            </button>
        </router-link>
    </div>
  </div>
</template>

<style scope>
button {
    width: 100px;
    height: 50px;
    border: 3px solid black;
    border-radius: 20%;
}

.buttons {
    display: flex;
}
</style>
