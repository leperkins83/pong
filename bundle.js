(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var player = require('./paddle.js');
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.9;
var ball = require('./ball.js');

gameLoop();
function gameLoop(){
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(0,0, canvas.width, canvas.height);
  player.update();
  player.render(ctx);
  ball.update(player);
  ball.render(ctx);

  window.requestAnimationFrame(gameLoop);
}

},{"./ball.js":1,"./paddle.js":3}],3:[function(require,module,exports){
var paddle = {
  x: 100,
  y: 100,
  w: 40,
  h: 200,
  speed: 12,

  update: function(){
    if (this.direction === "up") {
      this.y = this.y -this.speed;
    }
    if (this.direction === "down") {
      this.y += this.speed;
    }
    if (this.direction === "left") {
      this.x = this.x - this.speed;
    }
    if (this.direction === "right") {
      this.x += this.speed;
    }
  },
  render: function(ctx){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

document.addEventListener('keydown', function(e){
  console.log(e.keyCode);
  if (e.keyCode === 38) paddle.direction = "up";
  else if (e.keyCode === 40) paddle.direction = "down";
  else if (e.keyCode === 37) paddle.direction = "left";
  else if (e.keyCode === 39) paddle.direction = "right";
});

document.addEventListener('keyup', function(e){
  if (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 37 || e.keyCode === 39) paddle.direction = null;
});

module.exports = paddle;

},{}]},{},[2]);
