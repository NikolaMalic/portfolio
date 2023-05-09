var d = 1;
var i = 0;
var c = 0;
var k = 0;
function first() {
	if(!d){
		wallpapers.style.display = "inline";
		btn1.style.color = "#fff";
		btn1.style.backgroundColor = "rgb(0 150 136 / 50%)";
		d = 1;
	}
	else{
		wallpapers.style.display = "none";
		btn1.style.backgroundColor = "#1e1e1e";
		d = 0;
	}
}
function second() {
	if(!i){
		ict.style.display = "inline";
		btn2.style.color = "#fff";
		btn2.style.backgroundColor = "rgb(0 150 136 / 50%)";
		i = 1;
	}
	else{
		ict.style.display = "none";
		btn2.style.backgroundColor = "#1e1e1e";
		i = 0;
	}
}
function third() {
	if(!c){
		sweetdays.style.display = "inline";
		btn3.style.backgroundColor = "rgb(0 150 136 / 50%)";
		c = 1;
	}
	else{
		sweetdays.style.display = "none";
		btn3.style.backgroundColor = "#1e1e1e";
		c = 0;
	}
}
function fourth() {
	if(!k){
		random.style.display = "inline";
		btn4.style.backgroundColor = "rgb(0 150 136 / 50%)";
		k = 1;
	}
	else{
		random.style.display = "none";
		btn4.style.backgroundColor = "#1e1e1e";
		k = 0;
	}
}