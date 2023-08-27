//This is summmary file of All datatypes in JS

score = 333
//console.log(score)
//console.log(typeof(score))

//Total 7 premitive dataypes 
//Number, String , boolean, Symbol, Null, Undefine

//You can assign NULL 
let marks1=null  //typeof Null is object

let marks2;
console.log(typeof(marks2))  // typeof Undefine means not assign any value...
console.log("==========================================================================")
// console.log(marks1 >= 0)// returns true
// console.log(marks1 == 0) //return false

console.log(marks2>= 0)// returns false in undefine
console.log(marks2 <= 0) //return false
console.log("==========================================================================")

let id = Symbol(123)
let userId= Symbol(123)
//these both are same Symbol data but not same 

console.log(id == userId) // this gives output False
console.log(typeof(id)) // Symbol
console.log(typeof(userId)) //Symbol
let a = 123;
console.log(typeof(String(a)))// this a is converted here no to string//this is the first letter is always Capital..

//Non-Premitive DataTypes -- Reference Types
//Array, Function, Object
const Array1=['ras','yas','pintu']
console.log(typeof(Array1)) // it prints Object...

const res = function ()
{}
console.log(typeof(res))  // Function Object

const person ={id:1,name:'Ras'}
console.log(typeof(person))  //Object Type
