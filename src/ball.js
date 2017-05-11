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
  x: 200,
  y: 200,
  w: 30,
  h: 30,
  velX: 3,
  velY: 3,

  update: function(paddle){
    this.x += this.velX
    this.y += this.velY
    if (this.x + this.w >= width) {
      this.velX = this.velX * -1
    }
    if (this.y + this.h >= height || this.y <= 0) {
      this.velY = this.velY * -1
    }

    //  if (this.detectCollisions(paddle)){
    //    ball.velX *= -1;
    //  }
    var collision = this.detectCollisions(paddle);
    if (collision === "bottom"){
      this.velX *= -1;
      this.velY *= -1;
    }
    else if (collision === "top"){
      this.velX *= -1;
      this.velY *= -1;
    }
    else if (collision === "left"){
      this.velX *= -1;
    }

},

  render: function(ctx) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  },

  detectCollisions: function(paddle){
   var px = paddle.x;
   var py = paddle.y;
   var px2 = paddle.x + paddle.w;
   var py2 = paddle.y + paddle.h;
   var bx = this.x;
   var by = this.y;
   var bx2 = this.x + this.w;
   var by2 = this.y + this.h;
   var topLeftCollision = bx >= px && bx <= px2 && by >= py && by <= py2;
   var topRightCollision = bx2 >= px && bx2 <= px2 && by2 >= py && by2 <= py2;
   var btmLeftCollision = bx >= px && bx <= px2 && by2 >= py && by2 <= py2;
   var btmRightCollision = bx2 >= px && bx2 <= py2 && by2 >= py && by2 <= py2;
    if (topLeftCollision && btmLeftCollision) {
      return "left";
    }
    if (topLeftCollision && topRightCollision) {
      return "top";
    }
    if (btmLeftCollision && btmRightCollision) {
      return "bottom";
    }
    if (topLeftCollision || btmLeftCollision) {
      return "left";
    }

    if (bx >= px &&
      bx <= px2 &&
      by >= py &&
      by <= py2) {
        return true;
     }

   }

};

module.exports = ball;
