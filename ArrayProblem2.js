// find second largest and smallest number from array of 10 random numbers using sorting

let arraysOfNumber = new Array();
console.log("Numbers are : ")
for(let  i = 0 ; i<10 ; i++){
    let number = Math.floor((Math.random())*1000);
    arraysOfNumber[i] = number ;
    console.log(arraysOfNumber[i])
}
arraysOfNumber.sort();
let secondMaxNumber = arraysOfNumber[8];
let secondMinNumber = arraysOfNumber[1];
console.log("second largest number is : "+secondMaxNumber)
console.log("second smallest number is : "+secondMinNumber)