// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

<<<<<<< HEAD
const keypress = require("keypress");
// const Hero = require('./game-models/Hero');
=======
const keypress = require('keypress');
const game = require ('../run')
>>>>>>> 58ee5882adb6ab3e23d18c2fd554faf384dc8ef4

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
<<<<<<< HEAD
  q: () => console.log("q"),
  w: () => console.log("w"),
  e: () => console.log("e"),
  r: () => console.log("r"),
  t: () => console.log("t"),
  y: () => console.log("y"),
=======
  q: () => game.hero.moveRight(),
  w: () => console.log('w'),
  e: () => console.log('e'),
  r: () => console.log('r'),
  t: () => console.log('t'),
  y: () => console.log('y'),
>>>>>>> 58ee5882adb6ab3e23d18c2fd554faf384dc8ef4
};

// Какая-то функция.

function runInteractiveConsole() {
  keypress(process.stdin);
  process.stdin.on("keypress", (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
<<<<<<< HEAD
      if (key in keyboard) {
        keyboard[key.name]();
=======
      if (key.name === 'd') {
        // console.log('d');
        game.hero.moveRight()
      }
      if (key.name === 'a') {
        game.hero.moveLeft()
      }
      if (key.name === 'f') {
        game.hero.attack()
>>>>>>> 58ee5882adb6ab3e23d18c2fd554faf384dc8ef4
      }
      // Прерывание программы.
      if (key.ctrl && key.name === "c") {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Давай попробуем запустить этот скрипт!

runInteractiveConsole();

module.exports = runInteractiveConsole