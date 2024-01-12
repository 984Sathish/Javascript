class Person{

    age = 25
    //location = 'canada'  
    
    //using 'get' keyword we can call function without () braces.
    get location() {
        return 'TamilNade'
    }

    constructor(firstName, lastName){

        this.firstName = firstName
        this.lastName = lastName
    }

//method
fullName(){

    console.log( this.firstName +' '+ this.lastName)
}


}

//object creation
let person = new Person('Tim', 'john')
let person1 = new Person('John', 'Wick')

//get value using object
console.log(person.age)

console.log(person.location)  //get keyword automatically call the 'location' method without ().

person.fullName()
person1.fullName()