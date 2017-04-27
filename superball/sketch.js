var total = 0; // how many destroyed?  
var player;  
var scl = 30;  
var upEnergy = [];  
var downEnergy = [];  
var leftEnergy = []; 
var rightEnergy = [];  
var enemy1,enemy2,enemy3,enemy4;   
var counter = 0;  
function setup(){
  createCanvas(800,600); 
  player = new ball();  
  pickLocation1(); 
  pickLocation2();  
  pickLocation3();
  pickLocation4();  
  frameRate(10);  
}
function pickLocation1(){
  var cols = floor(width/scl);  
  var rows = floor(height/scl);  
  enemy1 = createVector(floor(random(cols)),floor(random(rows)));  
  enemy1.mult(scl);
}
function pickLocation2(){
  var cols = floor(width/scl);  
  var rows = floor(height/scl);  
  enemy2 = createVector(floor(random(cols)),floor(random(rows)));  
  enemy2.mult(scl);
}
function pickLocation3(){
  var cols = floor(width/scl);  
  var rows = floor(height/scl);  
  enemy3 = createVector(floor(random(cols)),floor(random(rows)));  
  enemy3.mult(scl);
}
function pickLocation4(){
  var cols = floor(width/scl);  
  var rows = floor(height/scl);  
  enemy4 = createVector(floor(random(cols)),floor(random(rows)));  
  enemy4.mult(scl);
}
function draw(){
  background(175,100,200); 
  fill(255+sin(frameCount)*128);  
  text("Instructions\n",580,15);  
  fill(255); 
  text("Attack with energy balls: A\nMove: Arrow keys\nStop: Space bar\nDodge their evil attacks and fight back!",580,30);  
  text("Destroyed: "+total,20,15);  
  player.update();  
  player.show(); 
  for (var i = 0; i < upEnergy.length; i++){
    upEnergy[i].show(); 
    upEnergy[i].move();  
    if (upEnergy[i].kill(enemy1)){
      pickLocation1(); 
    } 
    if (upEnergy[i].kill(enemy2)){
      pickLocation2();  
    }
    if (upEnergy[i].kill(enemy3)){
      pickLocation3();  
    }
    if (upEnergy[i].kill(enemy4)){
      pickLocation4();  
    }
  }
  for (var i = 0; i < downEnergy.length; i++){
    downEnergy[i].show(); 
    downEnergy[i].move();  
    if (downEnergy[i].kill(enemy1)){
      pickLocation1();  
    } 
    if (downEnergy[i].kill(enemy2)){
      pickLocation2(); 
    }
    if (downEnergy[i].kill(enemy3)){
      pickLocation3();  
    }
    if (downEnergy[i].kill(enemy4)){
      pickLocation4();  
    }
  }
  for (var i = 0; i < leftEnergy.length; i++){
    leftEnergy[i].show();  
    leftEnergy[i].move(); 
    if (leftEnergy[i].kill(enemy1)){
      pickLocation1();  
    } 
    if (leftEnergy[i].kill(enemy2)){
      pickLocation2();  
    }
    if (leftEnergy[i].kill(enemy3)){
      pickLocation3();  
    }
    if (leftEnergy[i].kill(enemy4)){
      pickLocation4();  
    }
  }
  for (var i = 0; i < rightEnergy.length; i++){
    rightEnergy[i].show();  
    rightEnergy[i].move();
    if (rightEnergy[i].kill(enemy1)){
      pickLocation1(); 
    }  
    if (rightEnergy[i].kill(enemy2)){
      pickLocation2(); 
    }
    if (rightEnergy[i].kill(enemy3)){
      pickLocation3();  
    }
    if (rightEnergy[i].kill(enemy4)){
      pickLocation4();  
    }
  }
  fill(255,0,100);  
  ellipse(enemy1.x,enemy1.y,scl,scl); 
  ellipse(enemy2.x,enemy2.y,scl,scl);  
  ellipse(enemy3.x,enemy3.y,scl,scl); 
  ellipse(enemy4.x,enemy4.y,scl,scl);  
  enemy1.x += 20; 
  enemy1.y += 20; 
  enemy2.x += 30; 
  enemy4.y += 30;  
  if (enemy1.x < 0 || enemy1.x > width || enemy1.y < 0 || enemy1.y > height){
    pickLocation1();  
  }
  if (enemy2.x < 0 || enemy2.x > width || enemy2.y < 0 || enemy2.y > height){
    pickLocation2();  
  }
  if (enemy3.x < 0 || enemy3.x > width || enemy3.y < 0 || enemy3.y > height){
    pickLocation3();  
  }
  if (enemy4.x < 0 || enemy4.x > width || enemy4.y < 0 || enemy4.y > height){
    pickLocation4(); 
  }
  if (player.die(enemy1) || player.die(enemy2) || player.die(enemy3) || player.die(enemy4)){ // game over. 
    fill(0);  
    textSize(40);  
    text("Game Over.\nYou killed " + total + " evil ball(s).\nRefresh to play again.",width/2-300,height/2); 
    exit(); 
  }
}
function keyPressed(){
  if (keyCode == UP_ARROW){
    player.dir(0,-1);  
  }else if (keyCode === DOWN_ARROW){
    player.dir(0,1);  
  }else if (keyCode === RIGHT_ARROW){
    player.dir(1,0); 
  }else if (keyCode === LEFT_ARROW){
    player.dir(-1,0);  
  }else if (keyCode === 32){
    player.dir(0,0); 
  }else if (keyCode === 65){
    var upball = new energyUp(player.x,player.y);  
    upEnergy.push(upball); 
    var downball = new energyDown(player.x,player.y);  
    downEnergy.push(downball);  
    var leftball = new energyLeft(player.x,player.y);  
    leftEnergy.push(leftball);  
    var rightball = new energyRight(player.x,player.y);  
    rightEnergy.push(rightball);   
  }
}
// ball class 
function ball(){
  this.x = width/2; 
  this.y = height/2;
  this.xspeed = 0; 
  this.yspeed = 0;  
  this.update = function(){
    this.x = this.x+this.xspeed*scl;  
    this.y = this.y+this.yspeed*scl;  
    this.x = constrain(this.x,0,width-scl);  
    this.y = constrain(this.y,0,height-scl); 
  }
  this.show = function(){
    fill(255); 
    ellipse(this.x,this.y,scl,scl); 
  }
  this.dir = function(x,y){
    this.xspeed = x; 
    this.yspeed = y;  
  }
  this.die = function(pos){
    var d = dist(this.x,this.y,pos.x,pos.y);  
    if (d < 30){
      return true;  
    }else{
      return false;  
    }
  }
}
// up energy ball class
function energyUp(x,y){
  this.x = x;  
  this.y = y;  
  //this.r = scl/2;  
  this.show = function(){
    fill(255,204,0);  
    ellipse(this.x,this.y,scl,scl);  
  }
  this.move = function(){
    this.y = this.y-50;  
  }
  this.kill = function(pos){
    var d = dist(this.x,this.y,pos.x,pos.y);  
    if (d < 30){ // because radius of energyUp+enemy = 15+15 = 30, 
      // so intersection happens at this point. 
      total++;  
      return true;  
    }else{
      return false;  
    }
  }
}
// down energy ball class
function energyDown(x,y){
  this.x = x;
  this.y = y;    
  this.show = function(){
    fill(255,204,0);  
    ellipse(this.x,this.y,scl,scl);  
  }
  this.move = function(){
    this.y = this.y+50;  
  }
  this.kill = function(pos){
    var d = dist(this.x,this.y,pos.x,pos.y);  
    if (d < 30){
      total++;  
      return true;  
    }else{
      return false;  
    }
  }
}
// left energy ball class
function energyLeft(x,y){
  this.x = x;  
  this.y = y;  
  this.show = function(){
    fill(255,204,0);  
    ellipse(this.x,this.y,scl,scl);  
  }
  this.move = function(){
    this.x = this.x-50;  
  }
  this.kill = function(pos){
    var d = dist(this.x,this.y,pos.x,pos.y);  
    if (d < 30){
      total++;  
      return true;  
    }else{
      return false;  
    }
  }
}
// right energy ball class
function energyRight(x,y){
  this.x = x;  
  this.y = y;  
  this.show = function(){
    fill(255,204,0);  
    ellipse(this.x,this.y,scl,scl);  
  }
  this.move = function(){
    this.x = this.x+50;  
  }
  this.kill = function(pos){
    var d = dist(this.x,this.y,pos.x,pos.y);  
    if (d < 30){
      total++;  
      return true;  
    }else{
      return false;  
    }
  }
}