var a; 
var textfield; 
var ans;   
var outputstring = "";  
function setup(){ 
	createCanvas(1000,1000); 
	resetSketch();   
	var computer = createButton("Computer");
	computer.position(100,500);   
	var human = createButton("Human");
	human.position(200,500);   
	var refresh = createButton("Generate new number"); // attach event to this button 
	refresh.position(110,550);
	refresh.mousePressed(resetSketch); 
	computer.mousePressed(chk1);  
	human.mousePressed(chk2); 
}
function setAnswer(){
	var dp = ["C","H","C","C","C","C","H"]; 
	ans = dp[(a-1)%7]; 
}
function chk1(){ // the computer button is pressed 
	//console.log(ans); 
	if (ans === "C"){
		alert("Correct! I'll definitely win this game");  
	}else{
		alert("Wrong. I cannot win this game"); 
	}
}
function chk2(){ // the human button is pressed 
	//console.log(ans); 
	if (ans === "H"){
		alert("Correct! You'll definitely win this game"); 
	}else{
		alert("Wrong. You cannot win this game");  
	}
}
function resetSketch(){
	a = getRandom(1,500);  
	var outputa = select('#N');  
	outputa.html("N = "+a);
	setAnswer();  
}
function getRandom(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;  
}