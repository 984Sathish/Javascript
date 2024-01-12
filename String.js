let day = "tuesday "

console.log(day.length) //get length of day - 8(inclue space)

let subDay = day.slice(0,4) //slice 0, 1, 2, 3 value and excule 4, 5, 6, 7
console.log(subDay)   //output - 'tues'

console.log(day[1])  //u

let splitDay = day.split('s')  

//splitDay[0] = 'tue', splitDay[1] = 'day '
console.log( splitDay[1].trim())  //day

let a = '20'
let b = '30'

let c = parseInt(a) + parseInt(b)  //parse string to int
console.log(c)  //c = 50

console.log(c.toString()) //part int to string

let newDay = day + 'is a funday'
console.log(newDay)  // tuesday is funday

console.log(newDay.indexOf('day')) //output : 4 -> only get the 1 as a output. but we have day count has 2.

console.log(newDay.indexOf('day', 5))  //output : 16 -> in this also we  get the 1 as a output. but we have day count has 2.
                                       // 5 is used to start with 5th index 
//find 'day' count 

let count = 0
let value = newDay.indexOf('day')  

while(value !== -1){ //-1 is output - only we do not have day in string 
    count++
    value = newDay.indexOf('day', value+1)  //value is dynamically changing + 1

}

console.log("No of day count - "+count)  // 2


