// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard')
const keypress = require('keypress');


// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({position:1}); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.boomerang = new Boomerang()
    this.track = [];
    this.regenerateTrack();
    this.view = new View();
  }

  regenerateTrack(boomerang) {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
  
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin
    this.track[this.boomerang.position] = this.boomerang.skin
}

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if(this.enemy.position === this.boomerang.position) {
      this.enemy = new Enemy
    }
  }
  runInteractiveConsole() {
    keypress(process.stdin);
    process.stdin.on('keypress', (ch, key) => {
      if (key) {
        // Вызывает команду, соответствующую нажатой кнопке.
        if (key.name === 'd') {
          this.hero.moveRight()
          
        }
        if (key.name === 'a') {
          this.hero.moveLeft()
        }
        if (key.name === 'f') {
          this.boomerang.fly()
        }
        // Прерывание программы.
        if (key.name === 'c') {
          process.exit();
        }
      }
    });
    process.stdin.setRawMode(true);
  }
  

  play() {
     this.runInteractiveConsole()
    setInterval(() => {
      // Let's play!
      // if(this.enemy.position === )
     
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 24);
  }
}

module.exports = Game;
