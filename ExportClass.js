module.exports =  class Person{

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