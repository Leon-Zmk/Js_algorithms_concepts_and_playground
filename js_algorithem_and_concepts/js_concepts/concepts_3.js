// Event Delegration

let li=document.querySelectorAll('li')
let ul=document.getElementById("ul");

create=(x)=>{
	let li=document.createElement("li")
	let text=document.createTextNode(x);
	li.appendChild(text);
	ul.appendChild(li);

}

// There is a Problem in Loop where we cannot click new added element over existing loop-This is Call Event Delegation

// li.forEach(function(el){
// 	el.addEventListener("click",function(){
// 		console.log(el.innerHTML);
// 	})
// })

// for(let i=0 ;i<li.length;i++){
// 	li[i].addEventListener('click',function(){
// 		console.log(li[i].innerHTML);
// 	})
// }

////////////////////////////////////////////


//This is Solution for Event Delegation

ul.addEventListener("click",function(e){
	let target=e.target;
	console.log(target.innerHTML);
})

//////////////////////////////////

