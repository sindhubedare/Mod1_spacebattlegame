// var schwaz = {
//     hull : 20,
//       firepower : 5,
//       accuracy : 0.7,
// };

// var alien = {
//     'a1' :  {
//      'hull': 3,
//       'firepower' : 3, 
//       'accuracy' : 0.6,
// },
// 'a2' :  {
//     'hull'  : 3,
//      'firepower'  :3,
//      'accuracy'  : 0.7,
// },
// 'a3' :  {
//     'hull'  : 3,
//      'firepower'  : 3,
//      'accuracy'  :0.8,
// },
// 'a4' :  {
//     'hull'  : 3,
//      'firepower' : 3,
//      'accuracy'  : 0.8,
// },
// 'a5' :  {
//     'hull'  : 3,
//      'firepower'  : 3,
//      'accuracy'  :0.7,
// },
// 'a6' :  {
//     'hull'  : 3,
//      'firepower'  : 3,
//      'accuracy' : 0.6,
// }
// };

// if (
// (Math.random() < alien.accuracy))
// {console.log ('You have been hit')};

//End of sindhu's code


//Psuedo code
//Have 2 objects, 1. USS Schwaz and 2. Aliens 
//Schawz gets to attack 1st and Aliens attack one at a time
//Schwaz can either attach or retreat, and if it retreats game is over
//Properties of Schwaz : hull/hitpoints 0 or less ship is destroyed
//firepower- damage done to the hull of the target/alien
//Accuracy should be between 0 to 1- chances of hitting the target
//Aliens will also have hull, firepower and accuracy
//have alert box to enter to attack yes or no
//for loop in to determine the result along with Math.random()


//step 1 to give welcome alter message and instructions to open console
var username = prompt("Welcome to Space Battle Game, To play the game, right click on the screen, select 'Inspect', go to Console tab! Now lets start with your name");
alert("welcome" +username+ " to the Space Battle Game, let's begin!");

console.log('%c SpaceBattle', 'font-size: 40px');