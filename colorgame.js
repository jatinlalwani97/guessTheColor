var numSquares=6;
var colors= genrateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colordisplay");
var messageDisplay=document.querySelector("#message");
var h1color=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=genrateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];

		}
		else{
			squares[i].style.display="none";
		}
	}
});
hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=genrateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
		}

});

resetButton.addEventListener("click",function(){
	colors=genrateRandomColors(6);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];}
	h1color.style.background="steelblue";	
	messageDisplay.textContent= "";
	this.textContent="new colors"
})

colorDisplay.textContent=pickedColor;
for (var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function() {
		var clickedcolor=this.style.background;
		if(clickedcolor===pickedColor){
			
			messageDisplay.textContent="correct";
			changeColor(clickedcolor);
			h1color.style.background=clickedcolor;
			resetButton.textContent="play again";
		}
		else{
		this.style.background="#232323";
		messageDisplay.textContent="Try again"; 
			  
		}
	});
} 
function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background=color;
	} 
}
function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random]; 
}
function genrateRandomColors(num){
	var arr=[]
	for(var i=0 ; i< num;i++){
		arr.push(randomcolors())

	}
	return arr;
}
function randomcolors(){
	var r =Math.floor(Math.random() *256);

	var g =Math.floor(Math.random() *256);

	var b =Math.floor(Math.random() *256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}




 







