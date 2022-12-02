<script setup lang="ts">
const kanjiButtonTitle = 'Kanji';
const vocabButtonTitle = 'Vocabulary';
</script>

<template>
  <div class="introduction">
    <h1>Welcome to JLPT N3 Study Area!</h1>
    <div class="buttons">
        <router-link to="/kanji" v-slot="{ navigate }">
            <button @click="navigate">
                <span>{{ kanjiButtonTitle }}</span>
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

<style scoped lang="scss">
h1 {
    text-align: center;
    margin-bottom: 20px;
}

h5 {
    text-align: center;
}

button {
    width: 220px;
    height: 80px;
    border: 2px solid #00A746;
    border-radius: 10%;
    font-size: 2.5em;
    background-color:#00A746;
    color: white;
    transition: all 0.5s;

    & span {
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    & span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
    }
}

button:hover {
    color: black;

    & span {
        padding-right: 25px;
    }

    & span:after {
        opacity: 1;
        right: 0;
    }
}

.buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
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
