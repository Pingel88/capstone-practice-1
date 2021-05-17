const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth * (2/3);
canvas.height = innerHeight;

class Point {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }
}

function plotPoints() {
  setInterval(() => {

  }, 500)
}

let userPoints = [];
let points = [];

function animate() {
  requestAnimationFrame(animate);
  userPoints.forEach((point) => {
    point.draw();
  })
  points.forEach((point) => {
    point.draw();
  })
}

addEventListener('click', (event) => {
  userPoints.push(new Point(event.clientX - (innerWidth - canvas.width), event.clientY, 5, 'white'));
})

animate();