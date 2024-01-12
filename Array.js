var mark = Array(6) //array declaration with size

var mark = new Array(20, 30, 40, 50, 60) //array declaration with value

var mark = [20, 30, 40, 50, 60] //array declaration with value

console.log( mark[2] ) //get array 2 index value

console.log( mark[3] = 12)  //re assign array index 3 value.

mark.push(65) //add value in array at last

mark.pop()  //remove value in array at first

mark.unshift(11)  //add vlue in array at first

console.log(mark.indexOf(40)) //get the index value of 40 

console.log(mark.includes(100)) //verify 100 value present in the array

mark.splice(2,5) //cut 0,1 index value - retain 2, 3, 4 index value - cut 5 index value

//print sum of array using for loop
var sum = 0
for (let i = 0; i < mark.length; i++) {
    sum = sum + mark[i] 
}
console.log(sum)  //print sum of array value

//print sum of array using reduce filter map

mark.reduce((sum, mark) => sum+mark, 0) 


//print 2 multiple in an array using for loop
var score = [5, 10, 14, 18, 20, 25]
var evenScore = []

for (let i = 0; i < score.length; i++) {
    
    if(score[i] % 2 == 0)
        evenScore.push( score[i] )
}
console.log(evenScore)

//print 2 multiple in an array using 'filter'

let newEvenScore = score.filter(score => score%2 == 0 )  //filter
console.log(newEvenScore)

//print multiple of 3 in each value of array using 'map'
let mappedArray = newEvenScore.map(score => score*3)
console.log(mappedArray)

//print sum of array value using reduce
let totalValue = mappedArray.reduce((sum, total) => sum + total, 0)
console.log(totalValue)

//create new array
var newScore = [2, 11, 12, 15, 22, 25]

//filter multiples of 2, map with array to multiply 3 and reduce array with sum of value.
let value = newScore.filter(newScore=> newScore%2 == 0).map(newScore=> newScore*3).reduce((sum, total)=> sum+total, 0)
console.log(value)

//sort in array
let fruit = ["banana", "mango", "pomogranate", "apple"]

fruit.sort()
console.log(fruit)