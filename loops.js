let pokemonTeam = [
    "pikachu",
    "mewtwo",
    "zapdos",
    "charmander",
    "eevee",
    "bulbasaur",
    "agumon",
    "oshawott",
    "chikorita",
    "teddiursa",
    "weedle",
    "squirtle",
    "psyduck",
    "meowth"
]


// for loops
// for (conter, condition, incrementer){action}
// for (let i = 2; i < pokemonTeam.length; i+=2){
//     console.log(pokemonTeam[i] + " is at index " + i);
// }



// // for of

// // difficult for of:
// let counter = 2;
// for (const [index, pokemonName] of pokemonTeam.entries()) {
//     if (index < 2){
//         continue;
//     }
//     if (index == counter){
//         console.log(pokemonTeam[index] + " is at index " + index);
//         counter += 2;
//     }
// }

// standard for of:
// logs all pokemon in the team:
// for (let currentPokemon of pokemonTeam) {
//     console.log(currentPokemon);
// }


// for in
let favouritePokemon = {
    name: "blastoise",
    type: "water",
}

for(let property in favouritePokemon){
    console.log(`${property} value in favouritePokemon is ${favouritePokemon[property]}`);
}
    //favouritePokemon.property <-- won't work, no property declared in lines 49-52
    //favouritePokemon.name  <-- will work, name was declared in property


// for of
for (let property of Object.entries(favouritePokemon)) {
    console.log(`Property from for-of is: ${property}`)
}


// while loop
 while(false) {
    console.log("while message appears at least once")
 } 

 // do while loop
 do {
    console.log("do-while message appears at least once")
 } while (false)