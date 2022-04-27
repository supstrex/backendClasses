const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const start = document.querySelector("button");

canvas.width = 500;
canvas.height = 500;

class Figure {
  x = 240;
  y = 0;
  xDelta = 0;
  yDelta = 2;
  color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
  draw = function () {
    context.fillRect(this.x, this.y, 20, 20);
    context.fillStyle = this.color;
  };
  update = function () {
    this.y += this.yDelta;
  };
}

let data = [];

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  data.forEach((figure) => {
    figure.draw();
  });
}
function update() {
  data.forEach((figure) => {
    if (data.length > 1 && data[data.length - 1] !== figure) {
      if (
        data[data.length - 1].y + 20 >= figure.y &&
        data[data.length - 1].x === figure.x
      ) {
        if (data[data.length - 1].y === 0) {
          alert("Game Over");
          data = [];
        }
        data[data.length - 1].yDelta = 0;
        data[data.length - 1].xDelta = 0;
        deleteRaw();
        data.push(new Figure());
      }
    } else if (data[data.length - 1].y >= canvas.height - 20) {
      data[data.length - 1].yDelta = 0;
      deleteRaw();
      data.push(new Figure());
    } else {
      figure.update();
    }
  });
}

function deleteRaw() {
  let raw = 0;
  let sum = 0;
  data.forEach(function (figure) {
    if (figure.y === data[data.length - 1].y) {
      sum += 20;
    }
  });

  if (sum >= canvas.width) {
    raw = data[data.length - 1].y;
    data = data.filter(function (element) {
      if (element.y !== data[data.length - 1].y) {
        return true;
      }
    });
  }

  data.forEach(function (figure) {
    if (figure.y < raw) {
      figure.y += 20;
    }
  });
}

function loop() {
  requestAnimationFrame(loop);
  draw();
  update();
}
loop();

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

start.addEventListener("click", function () {
  data.push(new Figure());
});

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") {
    let wall = false;
    data.forEach(function (figure) {
      if (
        data[data.length - 1].y >= figure.y &&
        data[data.length - 1].y <= figure.y + 20 &&
        data[data.length - 1].x === figure.x - 20
      ) {
        wall = true;
      }
    });
    if (data[data.length - 1].x < canvas.width - 20 && wall === false) {
      data[data.length - 1].x += 20;
    }
  } else if (e.code === "ArrowLeft") {
    let wall = false;
    data.forEach(function (figure) {
      if (
        data[data.length - 1].y >= figure.y &&
        data[data.length - 1].y <= figure.y + 20 &&
        data[data.length - 1].x === figure.x + 20
      ) {
        wall = true;
      }
    });
    if (data[data.length - 1].x >= 20 && wall === false) {
      data[data.length - 1].x -= 20;
    }
  }
});
