import { reactive } from 'vue'

const store = ({
  state: reactive({
    theme: 'light'
  }),
  getters: {
    getTheme () { return store.state.theme }
  },
  mutations: {
    setTheme (theme) {
      store.state.theme = theme
      window.localStorage.setItem('theme', theme)
    }
  },
  actions: {
    setTheme (theme) {
      store.state.theme = theme
      window.localStorage.setItem('theme', theme)
    }
  }
})

export default store
