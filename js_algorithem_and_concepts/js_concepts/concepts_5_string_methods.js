//String Methods javascript


// 1.indexof()
// 2.search()
// 3.slice()
// 3.substring()
// 5.substr()
// 6.toLowercCase()
// 7.toUpperCase()
// 8.trim()
// 9.replace()
// 10.split()

let namestring="Zaw Min Khant";

console.log(namestring.indexOf("Zaw"))
console.log(namestring.indexOf("Min",4))


console.log(namestring.search("Min"))
console.log(namestring.search(/Zaw/g))


console.log(namestring.slice(0,5)) //start \ end

console.log(namestring.substring(0,5)) //start \ end

console.log(namestring.substr(0,5)) //from \ length

console.log(namestring.toLowerCase())

console.log(namestring.toUpperCase())

console.log(namestring.trim());

console.log(namestring.replace(/ /g,"Leon"));

console.log(namestring.split(" ",3)) //
