var menu = document.getElementById("menu");
var drawer = document.getElementById("drawer");
var closes = document.getElementById("close");
var main = document.getElementById("main");
var myNavi = document.querySelector(".myNavi");
var borUnderline = document.querySelector(".from-left");
var borUnderline2 = document.querySelector(".from-left2");
var borUnderline3 = document.querySelector(".from-left3");
var borUnderline4 = document.querySelector(".from-left4");
var mainContent = document.querySelector(".mainContent");
var position = document.querySelector(".position");

var featuredBlock = document.querySelector(".featuredBlock");
var featured = document.querySelector(".featured");

//var views = document.querySelector(".views");
//var ft1 = document.querySelector(".ft1");



menu.addEventListener("click", function(e) {
	drawer.classList.toggle("open");
	e.stopPropagation();
//	main.style.marginLeft = "200px";
//	myNavi.style.marginLeft = "-70px";
//	mainContent.style.marginLeft = "100px";
//	position.style.marginLeft = "195px";
//	featured.style.marginLeft = "350px";
//	
//	featuredBlock.style.marginLeft = "100px";
//
//	borUnderline.classList.remove("from-left");
//	borUnderline.classList.add("fromt-left1");
//
//	borUnderline2.classList.remove("from-left2");
//	borUnderline2.classList.add("from-left2s");
//
//	borUnderline3.classList.remove("from-left3");
//	borUnderline3.classList.add("from-left3s");
//
//	borUnderline4.classList.remove("from-left4");
//	borUnderline4.classList.add("from-left4s");
//	
	
	

});

closes.addEventListener("click", () => {
	drawer.classList.remove("open");

//	main.style.marginLeft = "0px";
//	myNavi.style.marginLeft = "0px";
//	mainContent.style.marginLeft = "120px";
//	position.style.marginLeft = "190px";
//	
//	featured.style.marginLeft = "22m5px";
//	
//	featuredBlock.style.marginLeft = "120px";
//	
//
//	borUnderline.classList.remove("fromt-left1");
//	borUnderline.classList.add("from-left");
//
//	borUnderline2.classList.remove("from-left2s");
//	borUnderline2.classList.add("from-left2");
//
//	borUnderline3.classList.remove("from-left3s");
//	borUnderline3.classList.add("from-left3");
//
//	borUnderline4.classList.remove("from-left4s");
//	borUnderline4.classList.add("from-left4");
});








