var spr;
function setup() {
  createCanvas(400, 400);
  spr = createSprite(
    width/2, height/3, 40, 40);
  spr.shapeColor = color(255);
}
function draw() {
  background(50);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  text("use arrow keys, or SPACE to stop.",
    width/2, height*0.67);
  drawSprites();
}
function keyPressed(){
  if (keyCode == RIGHT_ARROW) {
    spr.setSpeed(1.5, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    spr.setSpeed(1.5, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    spr.setSpeed(1.5, 180);
  }
  else if (keyCode == UP_ARROW) {
    spr.setSpeed(1.5, 270);
  }
  else if (key == ' ') {
    spr.setSpeed(0, 0);
  }
  return false;
}
