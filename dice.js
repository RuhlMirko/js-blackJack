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

const mapedEnemiesDices = enemies.map(function (item) {
  return [...item.dices];
});
//console.log(mapedEnemiesDices);

// DOM manipulation
/*
document.querySelector(".e1").textContent = enemies[0].dice_amount;
*/

console.log(enemies[0].dices);
let fullString = "";
for (let i = 0; i < 5; i++) {
  const currentNum = enemies[0].dices[i];

  fullString += `<img src="res/dice--${currentNum}.png" alt="" class="p1-d0${i}" />\n`;
}
document.querySelector(`.current-hand`).innerHTML = fullString;

const testArr = [
  [4, 5, 6],
  [7, 8, 9],
];
//console.log(testArr[0][0]);
