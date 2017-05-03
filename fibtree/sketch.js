var input;  
var parentval = -1;  
function setup(){
	createCanvas(1500,1000);
	input = createInput(); 
	input.position(30,50); 	
	input.changed(newText);
}
function newText(){
	parentval = input.value();  
}
function draw(){
	background(51); 
	fill(255); 
	text("The nth term of the fibonacci sequence is calculated as\nfib(n)=fib(n-1)+fib(n-2).We can actually draw a tree such that left child is fib(n-1) and right child is fib(n-2).\nWhen coding, we can actually write a recursive code simulating this.\nHowever note that this method creates overlapping subproblems.\nLook at how the branching happens by typing in 3 in the textfield above.\nThen erase that and type in 5 instead.\nYou would actually see the branch with parent node 3 occur twice, \ni.e. the same subproblem has been solved twice.\nYou can type in values from 1 to 18 inclusive in the text field to see how the branching looks like.\nIf you type in a value more greater than 18 (or less than 1) there won't be any sketches.\nI purposely made it this way because if n is too large then either the diagram gets out of bounds\nof canvas or drawing the tree is slow and the browser lags.\nThis method of finding the nth fibonacci term has exponential time complexity\n but there are ways to reduce it to linear time complexity.\nYou can click the upper left link for my tutorial.",30,90);
	if (parentval >= 1 && parentval <= 18){
		fib(parentval,width/2+100,100);  
	}
}   
function fib(n,x,y){ 
	fill(255); 	
	text(n,x,y);  
	if (n-1 >= 1){
		line(x,y,x-30,y+30);  
		fib(n-1,x-30,y+30);
	}
	if (n-2 >= 1){
		line(x,y,x+30,y+30); 
		fib(n-2,x+30,y+30);  
	}
}
