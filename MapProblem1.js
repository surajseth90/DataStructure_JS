let diceMap = new Map();
let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;
let i6 = 0;
do {
    let resultOfDice = Math.floor(((Math.random()) * 10) % 6) + 1;
    switch (resultOfDice) {
        case 1:
            i1++;
            diceMap.set(1, i1)
            break;

        case 2:
            i2++
            diceMap.set(2, i2)
            break

        case 3:
            i3++
            diceMap.set(3, i3)
            break;

        case 4:
            i4++;
            diceMap.set(1, i4)
            break;

        case 5:
            i5++
            diceMap.set(2, i5)
            break

        case 6:
            i6++
            diceMap.set(3, i6)
            break;
    }
} while (i1!=10 || i2!=10 || i3!=10 || i4!=10 || i5!=10 || i6!=10)
let maxReach = Math.max(i1,i2,i3,i4,i5,i6);
let minReach = Math.min(i1,i2,i3,i4,i5,i6);

console.log(maxReach);
console.log(minReach);