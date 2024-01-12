
const Person = require('./ExportClass')
//Function are declared by two types
//1st type:

//function declaration
function add(a,b){

    return a+b
    
}

//function call
 let sumOfNum = add(2,3)
 console.log(sumOfNum)  //output: 5

//2nd type - This type do not have name is called anyonyms function.
let sum = function(c,d){
    return c+d
}

//call anyonyms function
console.log( sum(4,5) )  //output: 9

//anyonyms function declartion with one line
let total = (c,d)=> c+d

//call anyonyms function
console.log(total(1,7))

//object creation
let person = new Person('Tim', 'john')
let person1 = new Person('John', 'Wick')

//get value using object
console.log(person.age)

console.log(person.location)  //get keyword automatically call the 'location' method without ().

person.fullName()
person1.fullName()


//