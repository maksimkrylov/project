// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

<<<<<<< HEAD
const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
// const Boomerang = require('./game-models/Boomerang');
const View = require("./View");
=======
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
>>>>>>> 58ee5882adb6ab3e23d18c2fd554faf384dc8ef4

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
<<<<<<< HEAD
    this.hero = new Hero({ position: 1 }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();

=======
    this.hero = new Hero({position:1}); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.boomerang = new Boomerang()
>>>>>>> 58ee5882adb6ab3e23d18c2fd554faf384dc8ef4
    this.track = [];
    this.regenerateTrack();
    this.view = new View();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }
  

  play() {
    setInterval(() => {
      // Let's play!

      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    });
  }
}

module.exports = Game;
