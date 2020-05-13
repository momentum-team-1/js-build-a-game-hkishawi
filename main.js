console.log("u r online")

var Game = function() {
    var canvas = document.getElementById("thesquare");
    var screen = canvas.getContext('2d')
    var gameSize = {x: canvas.width, y: canvas.height};
    this.bodies = [];
    this.bodies = this.bodies.concat(createEnemies(this));
    this.bodies = this.bodies.concat(new Player(this, gameSize));

    var tick = function() {
        self.update();
        self.draw(screen, gameSize);
        requestAnimationFrame(tick);
    };
    tick();
    console.log("ticking")
}; 

Game.prototype = {
    update: function() {
        var self = this; 

        var notCollidingWithAnything = function (b1) {
            return self.bodies.filter(function(b2) { return colliding (b1, b2); }).length === 0;
        };
        this.bodies = this.bodies.filer(notCollidingWithAnything);
        for (var i=0; i < this.bodies.length; i++) {
            this.bodies[i].update();
        }    
            },
        draw: function(screen, gameSize) {
            screen.clearRect(0, 0, gameSize.x, gameSize.y);

            for (var i=0; i < this.bodies.length; i++) {
                drawRect(screen, this.bodies[i]);
            }
        },


// if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
//         this.center.y -= 2;
//         } else if 
//         (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {  this.center.y += 2;
// } 