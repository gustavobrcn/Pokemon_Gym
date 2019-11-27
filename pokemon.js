class Pokemon {
    constructor(pokemonName) {
      this._name = pokemonName
  }

  init() {
  return Pokemon.queryPokemonAPI(this._name).then(pokemon => {
      this.name = pokemon.name
      this.hp = pokemon.stats[5].base_stat
      this.atk = pokemon.stats[4].base_stat
      this.def = pokemon.stats[3].base_stat
      this.abilities = [pokemon.abilities[0].ability.name, pokemon.abilities[1].ability.name]
      this.image = pokemon.sprites.front_default
      // this.priority = null
      // this.power = null
      // this.accuracy = null
    });
  }

  static queryPokemonAPI = async (id) => {
      const data = await fetch(`https://fizal.me/pokeapi/api/v2/id/${id}.json`)
        .then(res => res.json())
        .catch(error => {
          return fetch(`https://fizal.me/pokeapi/api/v2/name/${id}.json`)
            .then(res => res.json())
          });

          return data;
        }
}
