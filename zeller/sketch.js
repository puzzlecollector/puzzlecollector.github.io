var input_a,button_a,input_b,button_b,input_c,button_c,calculate; 
var a,b,c;  
var fix_a,fix_b,fix_c;  
function setup(){
	createCanvas(710,400); 
	// button a 
	input_a = createInput(); 
	input_a.position(20,170); 
	button_a = createButton('submit'); 
	button_a.position(input_a.x + input_a.width,170);
	button_a.mousePressed(setValue_a);   
	// button b  
	input_b = createInput(); 
	input_b.position(input_a.x,240);  
	button_b = createButton('submit');  
	button_b.position(input_b.x + input_b.width,240);  
	button_b.mousePressed(setValue_b);  
	// button c
	input_c = createInput();  
	input_c.position(input_a.x,310); 
	button_c = createButton('submit');  
	button_c.position(input_c.x+input_c.width,310);  
	button_c.mousePressed(setValue_c);  
	// calculate button 
	calculate = createButton('calculate'); 
	calculate.position(input_b.x,450);  
	calculate.mousePressed(displayResult);  
	textAlign(CENTER);  
	textSize(50);  
}
function draw(){
	textSize(30);  
	text("Day",25,30);
	text("Month",40,100);   
	text("Year",30,170);  
}
function setValue_a(){
	temp = input_a.value(); 
	temp = parseInt(temp);  
	if (Number.isInteger(temp) && (temp >= 1 && temp <= 31)){
		fix_a = temp;  
		a = temp; 
	}else{
		alert("invalid input");  
	}
}
function setValue_b(){
	temp = input_b.value();  
	temp = parseInt(temp);  
	if (Number.isInteger(temp) && (temp >= 1 && temp <= 12)){
		fix_b = temp;  
		if (temp == 1) b = 13;  
		else if (temp == 2) b = 14; 
		else b = temp;  
	}else{
		alert("invalid input");  
	}
}
function setValue_c(){
	temp = input_c.value();  
	temp = parseInt(temp);  
	if (Number.isInteger(temp) && (temp >= 1000 && temp <= 9999)){
		fix_c = temp;  
		c = temp; 
	}else{
		alert("invalid input");  
	}
}
function displayResult(){
	var K = a;  
	var M = b;  
	var D;
	var C;    
	if (b == 13 || b == 14){
		D = (c-1)%100;  
		C = Math.floor((c-1)/100); 
	}else{
		D = c%100;  
		C = Math.floor(c/100);  
	}   
	var ans = (K+Math.floor((13*(M+1))/5)+D+Math.floor(D/4)+Math.floor(C/4)+5*C);   	
	ans %= 7;    
	var day;  
	if (ans == 0){
		day = "Saturday"; 
	}else if (ans == 1){
		day = "Sunday";  
	}else if (ans == 2){
		day = "Monday"; 
	}else if (ans == 3){
		day = "Tuesday"; 
	}else if (ans == 4){
		day = "Wednesday"; 
	}else if (ans == 5){
		day = "Thursday"; 
	}else if (ans == 6){
		day = "Friday";  
	}
	var output = select("#res"); 
	output.html(fix_a + "/" + fix_b + "/" + fix_c + " is a " + day);  
} 
