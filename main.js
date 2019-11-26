
const startBtn = document.getElementById('start-btn')
const trainerForm = document.getElementById('trainer-form')
const pokemonForm = document.getElementById('pokemon-form')
const trainerIcon = document.getElementById('trainer-icons')
const selectedTrainer = document.getElementsByClassName('trainers')
const displayTeam = document.getElementById('display-team')
const pokemonTeam = document.getElementById('pokemon-team')
let trainer

startBtn.addEventListener('click', () => {
  trainerForm.style.display = 'block'
})
countSubmit = 1
trainerForm.addEventListener('submit', (e) => {
  e.preventDefault()


  countSubmit++
  console.log(countSubmit);

  name = document.getElementById('trainer-input').value
  if (countSubmit == 2) {
    trainer0 = new Trainer(name)
    console.log(trainer0.name);

  }else if (countSubmit == 3){
    trainer1 = new Trainer(name)
    console.log(trainer1.name);
  }
  else if (countSubmit == 4){
    trainer2 = new Trainer(name)
    console.log(trainer2.name);

  }
  else if ( countSubmit == 5){
    trainer3 = new Trainer(name)
    console.log(trainer3.name);
  }

  if(countSubmit == 5)
  {
    trainerForm.style.display = 'none'
    trainerIcon.style.display = 'block'

  }

  document.getElementById('trainer-name').innerHTML = `Trainer ${name}'s Team`
})
counterTrainerImage=1
for (let i = 1 ; i < 9; i++) {
  document.getElementById(`trainer${i}`).addEventListener('click', () => {

    trainerImg = document.getElementById(`trainer${i}`).src
    if(counterTrainerImage==1){
      trainer0.setIcon(trainerImg)
      document.getElementById('trainer-pic').src = trainerImg
    }
    else if (counterTrainerImage==2) {
      trainer1.setIcon(trainerImg)
      document.getElementById('trainer-pic').src = trainerImg
    }
    else if (counterTrainerImage==3) {
      trainer2.setIcon(trainerImg)
      document.getElementById('trainer-pic').src = trainerImg
    }
    else{
      trainer3.setIcon(trainerImg)
      document.getElementById('trainer-pic').src = trainerImg
    }
    console.log(counterTrainerImage);
    if(counterTrainerImage ==  4){
      trainerIcon.style.display = 'none'
      displayTeam.style.display = 'block'
      startBtn.style.display = 'none'

    }
    counterTrainerImage++
  })
}
let count = 0
pokemonForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const pokemonName =  document.getElementById('pokemon-input').value
  const pokemon = new Pokemon(pokemonName)
  await pokemon.init()
  trainer.addPokemon(pokemon)
  const image = document.createElement('img')
  image.src = pokemon.image
  image.dataset.index = count++
  pokemonTeam.appendChild(image)

})

pokemonTeam.addEventListener('click', (e) => { //current target is the pokemon team - what the listener is attached to
  console.log(e.target);                       //target is the thing that caused the event (img)
  console.log(e.currentTarget);
  if (e.target != e.currentTarget) {
    const pokemonIndex = e.target.dataset.index
    let pokemon = trainer0.all()[pokemonIndex]
    pokemonStats = document.getElementsByClassName('pokemon-info')
    pokemonStats[0].src = pokemon.image
    pokemonStats[1].innerHTML = `Name: ${pokemon.name}`
    pokemonStats[2].innerHTML = `Def: ${pokemon.def}`
    pokemonStats[3].innerHTML = `Abilities: ${pokemon.abilities[0]}, ${pokemon.abilities[1]}`
    pokemonStats[4].innerHTML = `HP: ${pokemon.hp}`
  }
  e.stopPropagation() //
})
