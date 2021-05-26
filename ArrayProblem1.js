// find second largest and smallest number from array of 10 random numbers

let arraysOfNumber = new Array();
console.log("Numbers are : ")
for(let  i = 0 ; i<10 ; i++){
    let number = Math.floor((Math.random())*1000);
    arraysOfNumber[i] = number ;
    console.log(arraysOfNumber[i])
}
let secondMaxNumber = arraysOfNumber[0];
var largest = Math.max(...arraysOfNumber);
arraysOfNumber.forEach(function(number){
    if(largest>number && secondMaxNumber<number)
    secondMaxNumber = number;
});
console.log("second largest number is : "+secondMaxNumber);
let secondMinNumber = arraysOfNumber[0]
var smallest = Math.min(...arraysOfNumber)
arraysOfNumber.forEach(function(number){
    if(smallest < number && secondMinNumber > number)
    secondMinNumber = number;
});
console.log("second smallest number is : "+secondMinNumber);