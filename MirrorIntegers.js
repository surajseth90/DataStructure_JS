// code to find the digits that are repeated twice like 33, 77 

let mirrorIntegers = new Array();
for (let index = 0; index < 100; index++) {
    let numberToString = index.toString();
    if (numberToString.charAt(0) == numberToString.charAt(1)) {
        let StringToInteger = parseInt(numberToString);
        mirrorIntegers.push(StringToInteger)
    }

}
console.log(mirrorIntegers);