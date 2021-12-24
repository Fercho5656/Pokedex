const ENDPOINT = import.meta.env.VITE_POKEMON_LIST_ENDPOINT
const IMG_ENDPOINT = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork"

export const getPokemonList = async () => {
    const response = await fetch(ENDPOINT);
    if (response.status === 404) return null;
    const data = await response.json();
    //adds img to pokemon
    data.results.forEach(pokemon => {
        //splits the url to get the id
        const id = pokemon.url.split("/")[6]
        pokemon.img = `${IMG_ENDPOINT}/${id}.png`
        pokemon.number = id
    })
    return data;
}

export const getPokemonDetail = async (id) => {
    const response = await fetch(`${ENDPOINT}/${id}`);
    if (response.status === 404) return null;
    const data = await response.json();
    //adds img to pokemon
    data.img = `${IMG_ENDPOINT}/${id}.png`
    return data;
}