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
