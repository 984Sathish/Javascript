/* var ->
1.used global level and function level
2.re declare is posible
3.re assigning is posible
4. Note: if u create var in global level, then u used in function level. 
    It will show at last in function level value. Not show in global value.
*/

var greet = "Evening"  

if(true){
    var greet = "Morning"
}

console.log("Using var: "+greet)  //output is 'Morning'

/* let -> 
1.used in global level and block{} level
2.re declaration is not possible
3. re assigning is possible
4. Note: if u create var in global level, then u used in function/block level{} level. 
    It will show at last in global level value. Not show in function/block value... this is a advantage of let.
*/

let newgreet = "Evening"  

if(true){
    let newgreet = "Morning" //greet = Morning only in this function/block. then it will kill. 
}

console.log("Using let: "+newgreet)  //output is 'Evening'

/* const -> 
1.const is behave like 'let'
2.re assigning is not possible
*/

const number = 2 //const declaration.

number = 4 //get error because const do not have to re assign the value.
