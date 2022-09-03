//Event Capturing and Bubblings

let inner=document.querySelector(".inner");
let mid=document.querySelector(".mid");
let outer=document.querySelector(".outer");

inner.addEventListener("click",function(){
	console.log("This is Inner");
},true)


mid.addEventListener("click",function(){
	console.log("This is Mid");
},true)


outer.addEventListener("click",function(){
	console.log("This is Outer");
},true)
