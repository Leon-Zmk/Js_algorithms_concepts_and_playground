// let is block scoped

let x="Hello World";  
let y=1;

// const is block scoped

const str="Hello World";
const numb=1;


//var is function scoped;

var string="Hello World";
var number=1;


let arr=['mango','orange','apple','banana','berry','melon']

let obj={

	name:"Zaw Min Khant",
	age:19,

	bd:function(){
		console.log(2022-this.age);
	},

	namemethod(){
		console.log(this.name);
	},

	job : () => {
		console.log(" Ai Developer");
	}
}

function name(){
	console.log("My name Is LeonZmk");
}

function aa (a){
	console.log("This is "+a+" function");
}

function bb (a,b){
	console.log(`This is ${a} and ${b} function`);
}

arrowone=aa=>{
	console.log("This is Arrowone" +aa)
}


arrowtwo=(aa,bb)=>{
	console.log("This is"+aa+"and"+bb+"arrowtwo function");
}


for(let i=0;i<arr.length;i++){
	console.log(arr[i])
}

for(x in arr){
	console.log(x+"-"+arr[x])

}

for(x of arr){
	console.log(x)
}

for(x in obj){
	console.log(x+"-"+obj[x])
}

// window.alert("this is alert box");
// window.confirm("this is confirm box");

// let data=window.prompt("Enter Your Data");

// if(data > 0){
// 	console.log("Yes Your Data is greater than 0")
// }
// else if( data != "" && data != Number){
// 	console.log("Your data is in String Format")
// }
// else{
// 	console.log("Please Enter Your Data");
// }

// Arithmetic Operators

// 1. +
// 2. -
// 3. *
// 4. /
// 5. **
// 6. *
// 7. ++
// 8. --

// Relational operators or Comprasion Operators

//  1. ==
//  2. !=
//  3. ===
//  4. !==
//  5. <
//  6. >
//  7. >=
//  8. <=


// Logical Operators

// 1. &&
// 2. ||
// 3. and
// 4. or
// 5. !

// Assignments Operators

// 1. =
// 2. +=
// 3. *=
// 4. /=
// 5. **=
// 6. %=
// 7. -=


