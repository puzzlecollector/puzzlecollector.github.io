var score = 0;
function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 10; i++) {
    var spr = createSprite(
      random(width), random(height),
      random(10, 50), random(10, 50));
    spr.shapeColor = random(255);
    spr.onMouseOver = removeAndScore;
  }
}
function draw() {
  background(50);
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (score < 10) {
    text(score, width/2, height/2);
  }
  else {
    text("you win!", width/2, height/2);
  }
}
function removeAndScore() {
  score += 1;
  this.remove();
}
