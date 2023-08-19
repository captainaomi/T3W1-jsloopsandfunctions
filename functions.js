// traditional

// function functionName(parameters){block of stuff to do}
function greeter(){
    console.log("standard message");
}


/**
 * 
 * @param {string} customMessage Required! some message to display
 */

function greeterWithMessage(customMessage){
    console.log("customMessage is: " + customMessage);
}


/**
 * 
 * @param {string} customMessage is optional, because default is given.
 * Some message to display in the console.log output
 */

function greeterWithDefault(customMessage = "default message"){
    console.log("customMessage is: " + customMessage);
}


greeterWithDefault();
greeterWithDefault("some custom message");



// ES6 style

/**
 * 
 * @param {string} customMessage optional, because default given
 */
let greeterWithDefaultES6 = (customMessage = "default value again") => {
    console.log("customMessage is: " + customMessage);
    return customMessage;
}

// function not executed, just copied around:
// let storedCustomMessage = greeterWithDefaultES6;

// function executed, returned value copied around:
let storedCustomMessage = greeterWithDefaultES6();
console.log("The returned value from the ES6 function is: " + storedCustomMessage);



// IIFEs

// let someNewFubction = () => {
// }

// let someUserJwt = "bla bla pretend it's a JWT"
// ((someUserJwt) =>
// {
//      // async checkJwtWithAPI(someUserJwt)
//      console.log(someUserJwt);
// }
// )();

// let checkUserJwt = (someUserJwt) => {
//     console.log(someUserJwt);
// }
// checkUserJwt();


// callbacks

let someFunctionWithCallback = (someMessage, someCallback) => {
    someCallback(someMessage);
}

someFunctionWithCallback("hello world", console.log);


// let someForm = (inputBox, callback) => {
//     callback(inputBox);
// }

// someForm(emailBox, validateEmail);


// blocks and scope

// let counter = 0;
// for (let index = 0; index <=10, index++) {
//     let counter = 5;
//     counter++;
// }
// console.log(counter);



// CLOSURES

// function gameData(){

//     let highScore = 0;

//     function setHighScore(newNumber){
//         highScore = newNumber
//     }

//     setHighScore(99);
//     return highScore;
// }

// console.log(gameData());


let eevee = {
    name: "Eevee",
    type: "normal",
    attack: function() {
        console.log("Eevee did an attack!");
    },
    ability: () => {
        console.log("Some ability was triggered!!! Woohoo!")
    },
    hobbies: {
        cycling: {
            skillLevel: "high"
        }
    }
}

// eevee.attack();
// eevee.ability();

let eeveeAbility = eevee.ability;
let eeveeCyclingSkillLevel = eevee.hobbies.cycling.skillLevel;
let {ability, attack, name, type, hobbies: {cycling: {skillLevel}}} = eevee;

console.log("Eevee's cycling skill level is: " + skillLevel);
console.log("Eevee cycling skill with dot notation: " + )

eeveeAbility();
ability();