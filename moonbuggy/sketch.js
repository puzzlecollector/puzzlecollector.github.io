var img;  
function setup(){
  createCanvas(600,600); 
  img = loadImage("Images/motorcycleman.jpg");  
}
function draw(){
  background(240); 
  image(img,0,0);  
  
}