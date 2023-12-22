// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');
const Game = require ('./Game')

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

// const keyboard = {
//   q: () => game.hero.moveRight(),
//   w: () => console.log('w'),
//   e: () => console.log('e'),
//   r: () => console.log('r'),
//   t: () => console.log('t'),
//   y: () => console.log('y'),
// };

// // Какая-то функция.

// function runInteractiveConsole() {
//   keypress(process.stdin);
//   process.stdin.on('keypress', (ch, key) => {
//     if (key) {
//       // Вызывает команду, соответствующую нажатой кнопке.
//       if (key.name === 'd') {
//         Game.hero.moveRight()
        
//       }
//       if (key.name === 'a') {
//         Game.hero.moveLeft()
//       }
//       if (key.name === 'f') {
//         Game.hero.attack()
//       }
//       // Прерывание программы.
//       if (key.name === 'c') {
//         process.exit();
//       }
//     }
//   });
//   process.stdin.setRawMode(true);
// }

// // Давай попробуем запустить этот скрипт!

// runInteractiveConsole();

// module.exports = runInteractiveConsole