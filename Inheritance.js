const Person = require("./ExportClass");

class Pet extends Person{

    //create constructor
    constructor(firstName, lastName){

        //super keyword is used to use parent constructor.
        super(firstName, lastName)  //this will ca
    }


}

let pet = new Pet('john', 'wick')

//get parent method 
pet.fullName()

//get parent variable
let loc = pet.location
console.log(loc)
