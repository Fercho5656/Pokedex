import { ref } from 'vue'
import { getPokemonDetail } from '../services/pokemon'

const usePokemon = (id = 1) => {
  const pokemonName = ref('')
  const pokedexNumber = ref(0)
  const pokemonSprites = ref([])
  const pokemonDefaultSprite = ref('')
  const pokemonAttributes = ref({})
  const pokedexEntries = ref([])

  const getPokemon = async () => {
    const { data, detailsData } = await getPokemonDetail(id)
    pokemonName.value = data.name
    pokedexNumber.value = data.id
    pokemonSprites.value = data.sprites
    pokemonDefaultSprite.value = data.sprites.other['official-artwork'].front_default
    pokemonAttributes.value = detailsData.stats

    // Picks a random description from the pokemon's entry
    pokedexEntries.value = detailsData.flavor_text_entries.filter(
      entry => entry.language.name === 'en'
    )
    pokedexEntries.value = Array.from(
      new Set([...pokedexEntries.value.map(entry => entry.flavor_text)])
    )
  }

  getPokemon()

  return {
    pokemonName,
    pokedexNumber,
    pokedexEntries,
    pokemonSprites,
    pokemonDefaultSprite,
    pokemonAttributes
  }
}

export default usePokemon
