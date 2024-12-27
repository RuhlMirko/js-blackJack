"use strict";
console.log("hello");

/*
const enemies = {
  player: "e1",
  dice_amount: 5,
  e1_dices: Array.from({ length: 5 }, () => Math.floor(Math.random() * 6)),
};*/

const enemiesObj = (player, dice_amount = 5, dices) => ({
  player,
  dice_amount,
  dices,
});

function getNewDices() {
  return Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
}

const enemies = [
  enemiesObj("e1", 5, getNewDices()),
  enemiesObj("e2", 5, getNewDices()),
  enemiesObj("e3", 5, getNewDices()),
  enemiesObj("e4", 5, getNewDices()),
  enemiesObj("e5", 5, getNewDices()),
];

console.log(enemies);
