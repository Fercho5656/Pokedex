<template>
    <div class="card">
        <input type="checkbox" name="gender" :checked="props.isMale" @click="emits('changeGender')" />
        <input type="checkbox" name="shiny" :checked="props.isShiny" @click="emits('changeShiny')" />
        <picture>
            <img class="img-fluid" :src="props.pokemonSprite" :alt="props.pokemonName" />
        </picture>
    </div>
</template>

<script setup>
const props = defineProps({
    pokemonName: {
        type: String,
        default: '',
    },
    pokemonSprite: {
        type: String,
        default: "",
    },
    isShiny: {
        type: Boolean,
        default: false,
    },
    isMale: {
        type: Boolean,
        default: true,
    },
})
const emits = defineEmits(["changeGender", "changeShiny",])
</script>

<style scoped>
.card {
    position: relative
}

.card>input {
    position: absolute;
    top: 0;
    appearance: none;
    width: 25px;
    height: 25px;
    font-size: 1.5em;
    transition: all ease-in-out 1s;
    z-index: 20;
}

input[name="gender"] {
    left: 0;
}

input[name="gender"]::after {
    content: "🚺";
}

input[name="gender"]:checked::after {
    content: "🚹";
}

input[name="shiny"] {
    right: 0;
    margin-top: 0.5rem;
    transform: rotate(180deg);
}

input[name="shiny"]::after {
    opacity: 0.3;
    content: "💡";
}

input[name="shiny"]:hover:not(:checked):after {
    animation: flickerBulb 1s infinite;
}

input[name="shiny"]:checked {
    margin: 0;
    transform: rotate(-360deg);
}

input[name="shiny"]:checked::after {
    opacity: 1;
}

picture>img {
    position: relative;
    background-color: rgb(var(--background-accent));
    border-radius: 10px;
    transition: all linear 0.5s;
    object-fit: cover;
    max-width: 250px;
    width: 100%;
}

@keyframes flickerBulb {
    0% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.5;
    }
}
</style>