function setRem(){
	document.documentElement.style.fontSize = innerWidth / 20 + "px";
}
setRem();
onresize = setRem;
var Close = document.querySelector(".ad-close"),
	Ad = document.querySelector(".ad");
Close.onclick = function(){
	Ad.style.display = "none";
}