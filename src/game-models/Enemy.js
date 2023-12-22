// Враг.

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
    if (this.position)
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
