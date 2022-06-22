<template>
    <div class="entries-card">
        <header>
            <h3>{{ props.pokemonName }}</h3>
        </header>
        <div class="entries-content">
            <p>{{ pokedexEntries[entryIdx] }}</p>
        </div>
        <footer>
            <ul class="slider">
                <li v-for="(entry, index) in props.pokedexEntries">
                    <button class="btn-dot" :class="(index === entryIdx) ? 'selected' : ''"
                        @click="entryIdx = index">⚪</button>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    pokemonName: {
        type: String,
        required: true,
    },
    pokedexEntries: {
        type: Array,
        required: true,
    }
})

const entryIdx = ref(0);
</script>

<style scoped>

header, footer {
    background-color: transparent;
}
.entries-card {
    background: #00B4DB;
    background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);
    background: linear-gradient(to right, #0083B0, #00B4DB);
    border-radius: 10px;
    max-width: 300px;
    padding: 15px;
    display: flex;
    margin: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
}

header>h3 {
    text-transform: capitalize;
}

.entries-content {
    min-height: 10ch;
}

footer {
    width: 100%;
}

.slider {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
}

li {
    display: inline;
}

.btn-dot {
    border: none;
    background-color: transparent;
    transition: opacity 0.25s ease-in-out;
}

.btn-dot:not(.selected) {
    opacity: 0.5;
}
</style>