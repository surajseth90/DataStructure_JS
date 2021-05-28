// find prime factors of given number 

let number = Math.ceil(Math.random()*100);
console.log("Number is : " + number);
console.log("Factors are : ");
let arrayOfPrimeFactors = new Array();
for(let i=2;i<=number;i++){
    if(number%i==0){
        for(let j=2;j<=i;j++){
            if(j==i){
                arrayOfPrimeFactors.push(i);
                break;
            }
            if(i%j==0){
                break;
            }
        }
    }
}
console.log(arrayOfPrimeFactors)