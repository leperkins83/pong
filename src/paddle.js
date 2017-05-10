var paddle = {
  x: 100,
  y: 100,
  w: 40,
  h: 200,
  speed: 10,

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
