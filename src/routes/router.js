import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import PokemonList from '../views/PokemonList.vue'
import PokemonDetail from '../views/PokemonDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: PokemonList
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon-detail',
    component: PokemonDetail
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFound
  },

  {
    path: '/:catchall(.*)',
    redirect: '/notfound'
  }
]

const history = createWebHistory()

const router = createRouter({
  history: history,
  routes: routes
})

export default router
