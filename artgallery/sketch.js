var x1,x2,x3,x4,x5,x6; 
var y1,y2,y3,y4,y5,y6; 
var x=100,y=100; 
var snowColor,floorColor;  
var frameColor;  

function setup() {
  frameRate(30); 
  createCanvas(800,400); 
  x1 = 200,y1 = 0; 
  x2 = 300,y2 = 50; 
  x3 = 400,y3 = 10
  x4 = 50,y4 = 70;  
  x5 = 600,y5 = 50;  
  x6 = 700,y6 = 0;  
  snowColor = [255,255,255];
  floorColor = [153,51,0];  
  frameColor = [204,153,0];  
}

function draw(){
  background(100,150,200); 
  fill(255); 
  text("I was walking in an art gallery...",20,30); 
  text("I guess the painting in the middle was supposed to be Mona Lisa ¯\\_(ツ)_/¯",30,50)
  text("Then I saw you. We used to enjoy sushi together",40,70); 
  text("But why is it snowing? Why am I floating? Don't tell me this is a dream...",50,90); 
  // draw floor 
  fill(floorColor);  
  rect(0,375,800,25);  
  //////////// frame 1 
  fill(frameColor);  
  rect(350,200,100,100); 
  // draw mona lisa 
  // hair 
  fill(70,50,40); 
  ellipse(400,230,50,50);
  // clothes 
  fill(50); 
  ellipse(400,275,60,50); 
  // body 
  fill(204,102,0);  
  rect(380,250,40,50); 
  // face  
  fill(200,180,110); 
  ellipse(400,235,40,30);
  //////////// frame 2 
  fill(frameColor);  
  rect(100,200,100,100); 
  // salmon sushi 
  fill(255);  
  rect(132.5,250,35,25,25);  
  fill(239,70,46); 
  ellipse(150,255,45,20);  
  //////////// frame 3 
  fill(frameColor); 
  rect(600,200,100,100); 
  fill(255); 
  rect(625,250,50,25,25);
  fill(253,211,53); 
  rect(625,240,50,25,25);  
  fill(255,226,118); 
  rect(632,240,35,20,20); 
  fill(0);  
  rect(640,240,20,30);  
  // falling snowflakes 
  drawSnowFlakes();  
    push();
    translate(width*0.8, height*0.2);
    rotate(frameCount / -100.0);
  star(0, 0, 20, 40, 5); 
  pop();
  // stickman 
  fill(0);  
  ellipse(mouseX,mouseY,20,20); 
  rect(mouseX-2,mouseY+10,5,20); 
  rect(mouseX-3,mouseY+30,2,20);//legs
  rect(mouseX+3,mouseY+30,2,20); 
  rect(mouseX-15,mouseY+10,15,3); //arms
  rect(mouseX+4,mouseY+10,15,3); 
  // another person 
  fill(300,100,46);  
  ellipse(550,330,20,20); 
  rect(550-2,330+10,5,20); 
  rect(550-3,330+30,2,20);//legs
  rect(550+3,330+30,2,20); 
  rect(550-15,330+10,15,3); //arms
  rect(550+4,330+10,15,3); 
} 

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function drawSnowFlakes() {
    stroke(200); 
    fill(snowColor); 
    // first snow flake 
    ellipse(x1,y1,3,3);  
    y1 = y1+1; 
    if (y1 > height){
      y1 = 0;  
    } 
    // second snow flake 
    ellipse(x2,y2,3,3);  
    y2 = y2+1;  
    if (y2 > height){
      y2 = 0; 
    }
    // third snow flake 
    ellipse(x3,y3,3,3); 
    y3 = y3+1;  
    if (y3 > height){
      y3 = 0; 
    }
    // fourth snow flake 
    ellipse(x4,y4,3,3); 
    y4 = y4+1;  
    if (y4 > height){
      y4 = 0;  
    }
    // fifth snow flake
    ellipse(x5,y5,3,3); 
    y5 = y5+1; 
    if (y5 > height){
      y5 = 0; 
    }
    // sixth snow flake 
    ellipse(x6,y6,3,3); 
    y6 = y6+1; 
    if (y6 > height){
      y6 = 0; 
    }
}