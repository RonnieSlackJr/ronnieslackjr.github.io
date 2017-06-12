/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "Scorpaphin";
animal["name"] = "Lester";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "skrtssskrtsss";
function addNoise(sound) {
    noises.push(sound);
}
addNoise("eeekeeekeekeek");
noises[noises.length] = ("glubglubglub");

console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
console.log(animal[noises]);
addNoise("RAAAWWRR");
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {species: "duck",
            name: "Jerome",
            noises: ["quack", "honk", "sneeze", "woosh"]
};
animals.push(duck);
var unicorn = {species: "unicorn",
               name: "Reggie",
               noises: ["psshheewww", "MAGIC", "clop clop"]
};
animals.push(unicorn);

var crow = {
    species: "crow",
    name: "Hunin",
    noises: ['hawwk', 'kaww', 'snoww', 'braaak']
};
animals.push(crow);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Decided to use an array for "friends" because "friends" will not have any other properties. SHould be much easier to work with, too.

var friends = [];

function pickFriend(animals) {
    var getName = animals[Math.floor(Math.random() * animals.length)];
    return getName["name"];
}
friends.push(pickFriend(animals));
console.log(friends);
animals[0].friends = pickFriend(animals);
console.log(animals[0]);

/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
