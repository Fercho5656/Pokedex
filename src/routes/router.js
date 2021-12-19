import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import PokemonList from '../views/PokemonList.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: PokemonList,
    },
]

const history = createWebHistory()

const router = createRouter({
    history: history,
    routes: routes
})

export default router