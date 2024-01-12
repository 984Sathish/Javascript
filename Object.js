//object is collection of properties

//object declaration
let person = {

    //properties
    name: 'john',
    age: '22',
    fullName: function () {
        console.log(this.name + "Wick")
    }
}

//get properties value
console.log(person.name) //john

console.log(person['age']) //22

//update properties
person.name = 'Tim john' //name: 'Time john'

//new properties
person.gender = 'male'  //gender: 'male'

//delete properties
delete person.gender  //delete gender properties

//verify properties

console.log('gender' in person) //false -> 'gender' properties not in 'person' object

//print all properties values in object
for (let key in person) {

    console.log(person[key])   //get all property value
}

//get fullName

console.log(person.fullName())

