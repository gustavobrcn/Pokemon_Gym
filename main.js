
console.log("adfa");
// const startBtn = document.getElementById('start-btn')
const trainerForm = document.getElementById('trainer-form')
const pokemonForm = document.getElementById('pokemon-form')
const trainerIcon = document.getElementById('trainer-icons')
const selectedTrainer = document.getElementsByClassName('trainers')
const displayTeam = document.getElementById('display-team')
const pokemonTeam1 = document.getElementById('pokemon-stats1')
const pokemonTeam2 = document.getElementById('pokemon-stats2')
const pokemonTeam3 = document.getElementById('pokemon-stats3')
const pokemonTeam4 = document.getElementById('pokemon-stats4')


const displaytrainer1 = document.getElementById('display-trainer1')
const displaytrainer2 = document.getElementById('display-trainer2')
const displaytrainer3 = document.getElementById('display-trainer3')
const displaytrainer4 = document.getElementById('display-trainer4')


 trainer0 = new Trainer("Aseel0")
 trainer1 = new Trainer("Aseel1")
 trainer2 = new Trainer("Aseel2")
 trainer3 = new Trainer("Aseel3")

displaytrainer1.style.display = 'none'
displaytrainer2.style.display = 'none'
displaytrainer3.style.display = 'none'
displaytrainer4.style.display = 'none'
// startBtn.addEventListener('click', () => {
//   trainerForm.style.display = 'block'
// })
countSubmit = 1
trainerForm.addEventListener('submit', (e) => {
  e.preventDefault()


  countSubmit++
  console.log(countSubmit);

  name = document.getElementById('trainer-input').value
  if (countSubmit == 2) {
    document.getElementById('trainer-text').innerHTML="Please enter the second trainers name"
    trainer0 = new Trainer(name)
    console.log(trainer0.name);
    document.getElementById('trainer-name1').innerHTML = `Trainer ${trainer0.name}'s Team`
  }else if (countSubmit == 3){
    document.getElementById('trainer-text').innerHTML="Please enter the third trainers name"
    trainer1 = new Trainer(name)
    console.log(trainer1.name);
    document.getElementById('trainer-name2').innerHTML = `Trainer ${trainer1.name}'s Team`
  }
  else if (countSubmit == 4){
    document.getElementById('trainer-text').innerHTML="Please enter the fourth trainers name"
    trainer2 = new Trainer(name)
    console.log(trainer2.name);
    document.getElementById('trainer-name3').innerHTML = `Trainer ${trainer2.name}'s Team`

  }
  else if ( countSubmit == 5){
    trainer3 = new Trainer(name)
    console.log(trainer3.name);
    document.getElementById('trainer-name4').innerHTML = `Trainer ${trainer3.name}'s Team`
  }

  if(countSubmit == 5)
  {
    trainerForm.style.display = 'none'
    trainerIcon.style.display = 'block'

  }

})
counterTrainerImage=1
for (let i = 1 ; i < 9; i++) {
  document.getElementById(`trainer${i}`).addEventListener('click', () => {

    trainerImg = document.getElementById(`trainer${i}`).src


console.log(trainerImg + " " + counterTrainerImage );
    if(counterTrainerImage==1){
      document.getElementById('trainer-pic1').src = trainerImg
      trainer0.setIcon(trainerImg)
    }
    else if (counterTrainerImage==2) {
      document.getElementById('trainer-pic2').src = trainerImg
      trainer1.icon = trainerImg
    }
    else if (counterTrainerImage==3) {
      document.getElementById('trainer-pic3').src = trainerImg
      trainer2.setIcon(trainerImg)
    }
    else{
      document.getElementById('trainer-pic4').src = trainerImg
      trainer3.setIcon(trainerImg)
    }
    console.log(counterTrainerImage);
    if(counterTrainerImage ==  4){
      displaytrainer1.style.display = 'block'
      displaytrainer2.style.display = 'block'
      displaytrainer3.style.display = 'block'
      displaytrainer4.style.display = 'block'
      trainerIcon.style.display = 'none'
      displayTeam.style.display = 'block'
      // startBtn.style.display = 'none'

    }
    counterTrainerImage++
  })
}
let count = 0
counterPokemon1 = 0
counterPokemon2 = 0
counterPokemon3 = 0
counterPokemon4 = 0

displaytrainer1.addEventListener('submit', async (e) => {
  e.preventDefault()
  const pokemonName =  document.getElementById('pokemon-input1').value
  if(counterPokemon1 < 3){
    const pokemon = new Pokemon(pokemonName)
    await pokemon.init()

    trainer0.addPokemon(pokemon)
    const image = document.createElement('img')
    image.classList.add  = `trainer1${counterPokemon4}`
    image.id = counterPokemon1
    image.src = pokemon.image
    image.dataset.index = count++
    pokemonTeam1.appendChild(image)
    counterPokemon1++
  }

})
displaytrainer2.addEventListener('submit', async (e) => {
  e.preventDefault()
  const pokemonName =  document.getElementById('pokemon-input2').value
  if(counterPokemon2 < 3){
    const pokemon = new Pokemon(pokemonName)
    await pokemon.init()
    trainer1.addPokemon(pokemon)
    const image = document.createElement('img')
    image.src = pokemon.image
    image.classList.add  = `trainer2${counterPokemon4}`
    image.id = counterPokemon2
    image.dataset.index = count++
    pokemonTeam2.appendChild(image)
    counterPokemon2++
  }

})
displaytrainer3.addEventListener('submit', async (e) => {
  e.preventDefault()
  const pokemonName =  document.getElementById('pokemon-input3').value
  if(counterPokemon3 < 3){
    const pokemon = new Pokemon(pokemonName)
    await pokemon.init()
    trainer2.addPokemon(pokemon)
    const image = document.createElement('img')
    image.src = pokemon.image
    image.classList.add  = `trainer3${counterPokemon4}`
    image.id = counterPokemon3
    image.dataset.index = count++
    pokemonTeam3.appendChild(image)
    counterPokemon3++
  }

})

displaytrainer4.addEventListener('submit', async (e) => {
  e.preventDefault()

  const pokemonName =  document.getElementById('pokemon-input4').value
  if(counterPokemon4 < 4){
    const pokemon = new Pokemon(pokemonName)
    await pokemon.init()
    trainer3.addPokemon(pokemon)
    const image = document.createElement('img')
    image.classList.add  = `trainer4${counterPokemon4}`
    image.id = counterPokemon4

    image.src = pokemon.image
    image.dataset.index = count++
    pokemonTeam4.appendChild(image)
    counterPokemon4++
  }

})

pokemonTeam1.addEventListener('click', (e) => { //current target is the pokemon team - what the listener is attached to
  console.log(e.target);                       //target is the thing that caused the event (img)
  console.log(e.currentTarget);
    if (e.target.id < 3) {
    const pokemonIndex = e.target.id
    var pokemon = trainer0.all()[pokemonIndex]
    pokemonStats = document.getElementsByClassName('pokemon-info1')
    // pokemonStats[0].src = pokemon.image
    pokemonStats[1].innerHTML = `Name: ${pokemon.name}`
    pokemonStats[2].innerHTML = `Def: ${pokemon.def}`
    pokemonStats[3].innerHTML = `Abilities: ${pokemon.abilities[0]}, ${pokemon.abilities[1]}`
    pokemonStats[4].innerHTML = `HP: ${pokemon.hp}`
  }
  e.stopPropagation() //
})
pokemonTeam2.addEventListener('click', (e) => { //current target is the pokemon team - what the listener is attached to
  console.log(e.target);                       //target is the thing that caused the event (img)
  console.log(e.currentTarget);
  if (e.target.id < 3)  {
    const pokemonIndex = e.target.id
    console.log(pokemonIndex);
    var pokemon = trainer1.all()[pokemonIndex]
    pokemonStats = document.getElementsByClassName('pokemon-info2')
    // pokemonStats[0].src = pokemon.image
    pokemonStats[1].innerHTML = `Name: ${pokemon.name}`
    pokemonStats[2].innerHTML = `Def: ${pokemon.def}`
    pokemonStats[3].innerHTML = `Abilities: ${pokemon.abilities[0]}, ${pokemon.abilities[1]}`
    pokemonStats[4].innerHTML = `HP: ${pokemon.hp}`
  }
  e.stopPropagation() //
})
pokemonTeam3.addEventListener('click', (e) => { //current target is the pokemon team - what the listener is attached to
  console.log(e.target.dataset.id);                       //target is the thing that caused the event (img)
  console.log(e.currentTarget);
  if (e.target.id < 3)  {
    const pokemonIndex = e.target.id
    var pokemon = trainer2.all()[pokemonIndex]
    pokemonStats = document.getElementsByClassName('pokemon-info3')
    // pokemonStats[0].src = pokemon.image
    pokemonStats[1].innerHTML = `Name: ${pokemon.name}`
    pokemonStats[2].innerHTML = `Def: ${pokemon.def}`
    pokemonStats[3].innerHTML = `Abilities: ${pokemon.abilities[0]}, ${pokemon.abilities[1]}`
    pokemonStats[4].innerHTML = `HP: ${pokemon.hp}`
  }
  e.stopPropagation() //
})
pokemonTeam4.addEventListener('click', (e) => { //current target is the pokemon team - what the listener is attached to
console.log(e.target.id);
console.log(e.target.dataset.index);                       //target is the thing that caused the event (img)

  if (e.target.id < 3) {
    const pokemonIndex = e.target.dataset.index

    var pokemon = trainer3.all()[e.target.id]
    pokemonStats = document.getElementsByClassName('pokemon-info4')

    // pokemonStats[0].src = pokemon.image
    pokemonStats[1].innerHTML = `Name: ${pokemon.name}`
    pokemonStats[2].innerHTML = `Def: ${pokemon.def}`
    pokemonStats[3].innerHTML = `Abilities: ${pokemon.abilities[0]}, ${pokemon.abilities[1]}`
    pokemonStats[4].innerHTML = `HP: ${pokemon.hp}`
  }
  e.stopPropagation() //
})
