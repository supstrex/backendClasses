const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const button = document.querySelector("button");

let data = [];

function Ball() {
  this.r = random(4, 50);
  this.x = random(this.r, canvas.width - this.r);
  this.y = random(this.r, canvas.height - this.r);
  this.xDelta = random(-5, 5);
  this.yDelta = random(-5, 5);
  this.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
  this.draw = function () {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    context.fill();
  };
  this.update = function () {
    if (this.x + this.r > canvas.width || this.x - this.r < 0) {
      this.xDelta *= -1;
    }
    if (this.y + this.r > canvas.height || this.y - this.r < 0) {
      this.yDelta *= -1;
    }
    this.x += this.xDelta;
    this.y += this.yDelta;
  };
}
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  data.forEach(function (ball) {
    ball.draw();
  });
}

function update() {
  data.forEach(function (ball) {
    ball.update();
  });
}

function loop() {
  requestAnimationFrame(loop);
  update();
  draw();
}

loop();

button.addEventListener("click", function () {
  let ball = new Ball();
  data.push(ball);
});

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
