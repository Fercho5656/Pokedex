<template>
    <div class="entries-card">
        <header>
            <h3>{{ props.pokemonName }}</h3>
        </header>
        <div class="entries-content">
            <p v-if="!singleEntry">{{ pokedexEntries[0] }}</p>
            <p v-else>{{ singleEntry }}</p>
        </div>
        <footer>
            <ul>
                <li v-for="entry in props.pokedexEntries">
                    <button class="btn-dot" :class="(singleEntry === entry) ? 'selected' : ''"
                        @click="singleEntry = entry">⚪</button>
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

const singleEntry = ref('')
</script>

<style scoped>
header,
.entries-card,
footer {
    background-color: rgb(var(--card-bg));
    border-radius: 10px;
}

header > h3 {
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