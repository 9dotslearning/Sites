let y = 0;
let ystep = 4;

function windowResized() {
  resizeCanvas(32, windowHeight);
}

function setup() {
  cnv = createCanvas(32, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  colorMode(HSB);
  background(0, 0, 95);
}

function draw() {
  noStroke();
  fill(random(360), 100, 100);
  ellipse(12 * sin(radians(4 * y)) + 16, y, 4, 4);
  ellipse(-12 * sin(radians(4 * y)) + 16, y, 4, 4);
  y += ystep;
  if ( y > windowHeight) ystep = -4;
  if (y < 0) ystep = 4;

}
