// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
// const game = require ('C:\Users\work\Desktop\фаза1\project\run.js')
class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 0;
  }

  fly() {

    // if (this.position === game.enemy.position) {
    //   game.enemy.die()
    //   this.moveLeft();

    // }
    this.moveRight();
    
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
