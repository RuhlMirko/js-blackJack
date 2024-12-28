"use strict";

// Constructor
const enemiesObj = (player, dice_amount = 5, dices) => ({
  player,
  dice_amount,
  dices,
});
function getNewDices() {
  return Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
}
// Enemies object creation
const enemies = [
  enemiesObj(1, 2, getNewDices()),
  enemiesObj(2, 5, getNewDices()),
  enemiesObj(3, 5, getNewDices()),
  enemiesObj(4, 5, getNewDices()),
  enemiesObj(5, 5, getNewDices()),
];

const allDices = enemies.map(function (item) {
  return [...item.dices];
});
console.log(
  ` Dices:
  p1: ${allDices[0]}
  p2: ${allDices[1]}
  p3: ${allDices[2]}
  p4: ${allDices[3]}
  p5: ${allDices[4]}`
);

/* DOM manipulation
document.querySelector(".e1").textContent = enemies[0].dice_amount;



// Sets html to reflect the player dices
let fullString = "";
for (let i = 0; i < 5; i++) {
  const currentNum = enemies[0].dices[i];

  fullString += `<img src="res/dice--${currentNum}.png" alt="" class="p1-d0${i}" />\n`;
}
document.querySelector(`.current-hand`).innerHTML = fullString;
*/
