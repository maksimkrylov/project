// Враг.
const Boomerang = require ('./Boomerang')

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 16;
    this.moveLeft()
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    
    setInterval(() => {
      this.position -= 1;
    }, 1000);
   

  }

  die() {
    
      console.log('Enemy is dead!');
      
    }
    // this.position = '?';
    

  
}

module.exports = Enemy;
