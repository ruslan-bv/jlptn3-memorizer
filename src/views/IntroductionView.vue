<script setup lang="ts">
const kanjiButtonTitle = 'Kanji';
const vocabButtonTitle = 'Vocabulary';
</script>

<template>
  <div class="introduction">
    <h1>Welcome to JLPT N3 Study Area!</h1>
    <!-- <h3>Please choose what you want to master today:</h3> -->
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
h1 {
    text-align: center;
}

button {
    width: 230px;
    height: 80px;
    border: 2px solid #00A746;
    border-radius: 10%;
    font-size: 2em;
    background-color:#00A746;
    color: white;
}

button:hover {
    color: black;
}

.buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.introduction {
    width: 500px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -250px;
}
</style>
