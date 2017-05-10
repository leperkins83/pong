//what does a ball need: height, width, color, x, y, size, speed: velX and speed:velY, update and render
//update: update: functon(){
   //this.x = this.x + this.velX
   //this.y += this.velY
//}

//render:

//export it
// can also use var canvas = document.getElementById("canvas");
var width = window.innerWidth * 0.9;
var height = window.innerHeight * 0.9;

var ball = {
  x: 100,
  y: 100,
  w: 30,
  h: 30,
  velX: 2,
  velY: 2,

  update: function(){
    this.x += this.velX
    this.y += this.velY
    if (this.x >= width) {
      this.velX = this.velX * -1
    }
    if (this.y >= height || this.y <= 0) {
      this.velY = this.velY * -1
    }
    if (this.detectCollisions(paddle)) {
      this.velX *= -1;
    }
  },

  render: function(ctx) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  },

detectCollisions(paddle){
  
}

};

module.exports = ball;
