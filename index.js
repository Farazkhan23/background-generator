var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");
var currentColor = document.getElementById("currentColor");

function getColor() {
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	currentColor.textContent = body.style.background + ";";  
}

color1.addEventListener("input",getColor);
color2.addEventListener("input",getColor);