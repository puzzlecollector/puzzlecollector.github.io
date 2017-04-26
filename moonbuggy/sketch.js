var bike;  
var bikeImg; 
function preload(){
  bikeImg = loadImage("motorcycleman.jpg"); 
}
function setup(){
  createCanvas(400,400);  
  bike = createSprite(width/2,height/2); 
  bike.addImage(bikeImg);  
}
function draw(){
  background(255); 
  bike.position.x = mouseX; 
  bike.position.y = mouseY;  
  if (mouseIsPressed){
    bike.rotation += 2; 
  }
  drawSprites(); 
}
