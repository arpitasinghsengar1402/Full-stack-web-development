//primitive type
let num1=6
let num2=num1;
console.log(num1)
console.log(num2)
num1++
console.log(num1)
console.log(num2)

//refrence type
let array1=["item1","item2"]
let array2=array1
console.log("array1",array1)
console.log("array2",array2)
array1.push("item3")
console.log("after pushing elements to array 1")
console.log("array1",array1)
console.log("array2",array2)