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
header,
.entries-card,
footer {
    background-color: rgb(var(--card-bg));
    border-radius: 10px;
}

header>h3 {
    text-transform: capitalize;
}

.entries-card {
    padding: 10px;
    display: flex;
    margin: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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