import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import PokemonList from '../views/PokemonList.vue'
import PokemonDetail from '../views/PokemonDetail.vue'

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
    {
        path: '/pokemon/:id',
        name: 'pokemon-detail',
        component: PokemonDetail,
    }
]

const history = createWebHistory()

const router = createRouter({
    history: history,
    routes: routes
})

export default router