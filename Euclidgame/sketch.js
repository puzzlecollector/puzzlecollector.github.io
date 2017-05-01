var a,b; 
var textfield; 
var ans;   
var outputstring = "";  
function setup(){ 
	createCanvas(1000,1000); 
	resetSketch();   
	var computer = createButton("Computer");
	computer.position(100,400);   
	var human = createButton("Human");
	human.position(200,400);   
	var refresh = createButton("Generate new numbers"); // attach event to this button 
	refresh.position(110,450);
	refresh.mousePressed(resetSketch); 
	computer.mousePressed(chk1);  
	human.mousePressed(chk2); 
}
function setAnswer(){
	var f = 1;  
	for (var i = 0; i < 10000; i++){ 
		if (a > b){
			var temp = a; 
			a = b;  
			b = temp;  
		}
		if (b%a == 0) break; 
		if (b-a > a) break; 
		b -= a;  
		if (f === 1){
			f = 0;  
		}else{
			f = 1;  
		}
	}
	if (f === 1){
		ans = "computer"; 
	}else{
		ans = "human";  
	}
}
function chk1(){
	//console.log(ans); 
	if (ans === "computer"){
		alert("Correct! I'll definitely win this game");  
	}else{
		alert("Wrong.I cannot win this game"); 
	}
}
function chk2(){ 
	//console.log(ans); 
	if (ans === "human"){
		alert("Correct! You'll definitely win this game"); 
	}else{
		alert("Wrong.You cannot win this game");  
	}
}
function resetSketch(){
	a = getRandom(1,9999);  
	b = getRandom(1,9999); 
	var outputa = select('#a');  
	outputa.html("a = "+a);
	var outputb = select('#b'); 
	outputb.html("b = "+b);  
	setAnswer();  
}
function getRandom(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;  
}