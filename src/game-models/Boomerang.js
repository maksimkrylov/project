// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
// const game = require ('C:\Users\work\Desktop\фаза1\project\run.js')
class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 3;
  }

  

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
  fly() {

    
      // this.moveLeft();
      // this.moveRight();
    }
   
    
}


module.exports = Boomerang;
