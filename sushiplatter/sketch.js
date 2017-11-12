var x1,y1; // seaweed sushi  
var x2,y2; // salmon sushi 
var x3,y3; // egg sushi 
var x4,y4; // seaweed sushi 2 
var x5,y5; // salmon sushi 2  
var x6,y6; // egg sushi 2  

function setup(){
	createCanvas(800,800); 
	x1 = width/2; y1 = height;   
	x2 = 0; y2 = height/2;  
	x3 = width/3; y3 = height-50; 
	x4 = 0,y4 = height/6;  
	x5 = width-30; y5 = height-30;
	x6 = width/5; y6 = height-200;  
}

function draw(){
	//background(204,153,0); 
	background(220,180,200); 
	strokeWeight(2);  
	fill(255+sin(frameCount*0.1)*128);  
	textSize(65); 
	text("I LOVE SUSHI !!",mouseX,mouseY);  
	// seaweed sushi
	fill(0); // black seaweed 
 	ellipse(x1,y1,30,30);
 	strokeWeight(6);
  	fill(255); // white rice 
  	ellipse(x1,y1,29,29);
  	fill(160,204,80); // green cucumber 
  	ellipse(x1,y1,6,6);  
  	x1 += random(-1,1);  
 	y1 = y1-5;  
 	if (y1 < 0){
 		y1 = height; 
 	} 
 	// salmon sushi 
    fill(255);
    rect(x2,y2,70,25,25);
    fill(239,70,46);
    rect(x2,y2-10,70,25,25);
    x2 = x2+15; 
    if (x2 > width){
    	x2 = 0; 
    }
    y2 = y2-0.5; 
    if (y2 < 0){
    	y2 = height; 
    }
    // egg sushi 
    fill(255);
  	rect(x3,y3,70,25,25);
  	fill(253,211,53);
  	rect(x3,y3-10,70,25,25);
  	fill(255,226,118);
  	rect(x3+7,y3-10,55,20,20);
  	fill(0);
  	rect(x3+25,y3-10,20,30); 
  	x3 = x3-2;  
  	if (x3 < 0){
  		x3 = width/3; 
  	}
  	y3 = y3-10;  
  	if (y3 < 0){
  		y3 = height-50; 
  	}
  	// repeatedly copy and paste the above three types of sushi 
  	// we could use a for loop but since I'm not planning to paste in 
  	// a lot of sushi, I'm just going to hard code. 

  	// seaweed sushi
	fill(0); // black seaweed 
 	ellipse(x4,y4,30,30);
 	strokeWeight(6);
  	fill(255); // white rice 
  	ellipse(x4,y4,29,29);
  	fill(160,204,80); // green cucumber 
  	ellipse(x4,y4,6,6);  
  	x4 += 20; 
  	y4 += random(-50,50); 
  	if (x4 > width){
  		x4 = 0; 
  	}
  	if (y4 < 0 || y4 > height){
  		y4 = height/6; 
  	}

  	// salmon sushi 
    fill(255);
    rect(x5,y5,70,25,25);
    fill(239,70,46);
    rect(x5,y5-10,70,25,25);
    x5 -= 5; 
    y5 -= 5;  
    if (x5 < 0){
    	x5 = width-30; 
    }
    if (y5 < 0){
    	y5 = height-30; 
    }

    // egg sushi 
    fill(255);
  	rect(x6,y6,70,25,25);
  	fill(253,211,53);
  	rect(x6,y6-10,70,25,25);
  	fill(255,226,118);
  	rect(x6+7,y6-10,55,20,20);
  	fill(0);
  	rect(x6+25,y6-10,20,30); 
  	x6 += 6; 
  	y6 -= 6; 
  	if (x6 > width){
  		x6 = width/5;  
  	}
  	if (y6 < 0){
  		y6 = height-200; 
  	}
}