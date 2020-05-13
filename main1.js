class Game {
    constructor () {
      let canvas = document.querySelector('#game-board')
      let context = canvas.getContext('2d');
      let gameSize = { x: canvas.width, y: canvas.height }
      this.player = new Player(gameSize)
      let animate = () => {
        this.update()
        this.drawPlayer(context, gameSize)
        requestAnimationFrame(animate)
      }
      this.coin = new Coin(gameSize)
      let spawn = () => {
          this.update()
          this.drawCoin(context, gameSize)
          requestAnimationFrame(spawn)
      }
      animate()
    }
  
    drawPlayer (context, gameSize) {
      context.clearRect(0, 0, gameSize.x, gameSize.y)
      console.log('Draw player method called')
      context.fillStyle = '#07BEB8'
      let startingXPosition = this.player.center.x - this.player.size.x / 2
      let startingYPosition = this.player.center.y - this.player.size.y / 2
      let playerWidth = this.player.size.x
      let playerHeight = this.player.size.y
      context.fillRect(startingXPosition, startingYPosition, playerWidth, playerHeight)
    }
  

    drawCoin (context, gameSize) {
        context.clearRect(0, 0, gameSize.x, gameSize.y)
        console.log('Draw coin method called')
        context.fillstyle = '#2E6171'
        let startingXPosition = this.coin.center.x - this.coin.size.x / 2
        let startingYPosition = this.coin.center.y - this.coin.size.y / 2
        let coinWidth = this.coin.size.x
        let coinHeight = this.player.size.y
        context.fillRect(startingXPosition, startingYPosition, coinWidth, coinHeight)
    }
    // drawCoin (context, gameSize) {
    //     context.clearRect(0, 0, gameSize.x, gameSize.y)
    //     console.log('Draw coin method called')
    //     context.fillStyle = '#07BEB8'
    //     let 
    // }

    update () {
      // eventually this method will have to update all the objects
      this.player.update();
      this.coin.update();
    }
  }
  
    
  class Player {
    constructor (gameSize) {
      this.size = { x: 70, y: 70 }
      this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2 }
      this.keyboarder = Keyboarder
    }  
    update () {
      if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
        this.center.x += 2
      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
        this.center.x -= 2
      }
      if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {      this.center.y -= 2;
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) { this.center.y += 2;    
        }
    }
  }

  class Coin {
      constructor (gameSize) {
          this.size = { x: 30, y: 30}
          this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2}
      }
      update () {
      }
  }
  
  new Game()