class Trainer {
    constructor(name) {
      this.name = name
      this.pokemon = []
      this.icon = null
    }
    addPokemon(pokemon) {
      this.pokemon.push(pokemon)
      return `You added ${pokemon.name} to your team!`
    }

    all() {
      return this.pokemon
    }

    get(name) {
      return name
    }

    setIcon (url) {
      this.icon = url
    }
  }
