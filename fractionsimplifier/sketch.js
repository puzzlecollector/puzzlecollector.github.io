var input_a,button_a,input_b,button_b,calculate; 
var a,b;  
function setup(){
	createCanvas(710,400); 
	// button a 
	input_a = createInput();  
	input_a.position(20,65); 
	button_a = createButton('submit'); 
	button_a.position(input_a.x + input_a.width,65);
	button_a.mousePressed(setValue_a);   
	// button b  
	input_b = createInput(); 
	input_b.position(input_a.x,100);  
	button_b = createButton('submit');  
	button_b.position(input_b.x + input_b.width,100);  
	button_b.mousePressed(setValue_b);  
	// calculate button 
	calculate = createButton('calculate'); 
	calculate.position(input_b.x,150);  
	calculate.mousePressed(displayResult);  
	textAlign(CENTER);  
	textSize(50);  
}
function setValue_a(){
	temp = input_a.value(); 
	temp = parseInt(temp);  
	if (Number.isInteger(temp)){
		a = temp; 
	}else{
		alert("Please enter integer value for a");  
	}
}
function setValue_b(){
	temp = input_b.value();  
	temp = parseInt(temp);  
	if (Number.isInteger(temp) && temp > 0){
		b = temp;  
	}else{
		alert("Please enter integer value or non-zero value for b");  
	}
}
var gcd = function(x,y){
	if (y == 0){
		return x; 
	}
	return gcd(y,x%y);  
}
function displayResult(){
	before_a = a; 
	before_b = b;  
	var k = gcd(a,b); 
	a = a/k; 
	b = b/k;   
	var output = select('#res');  
	output.html("Before = " + before_a + "/" + before_b + ",      After = " + a + "/" + b);  
} 