var squares = document.getElementsByClassName("square");


for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("mouseover", function(){
		this.style.backgroundColor = "pink";
	});
}

// function pickColor(){
// 	 var n = Math.floor(Math.random() * colors.length);
// 	return n;
// }