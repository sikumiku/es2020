//Question 1: Clean the room function: given an input of 
//[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that 
//organizes these into individual array that is ordered. 
//For example answer(ArrayFromAbove) should return: 
//[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//Bonus: Make it so it organizes strings differently from number 
//types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

function cleanRoom(array) {
    const orderedArray = (array) => {
        let orderedArray = []
        for (let i = 0; i < array.length; i++) {
                // push bigger value to the end or start the array
            if (orderedArray.length === 0 || orderedArray[orderedArray.length - 1] <= array[i]) {
                orderedArray.push(array[i]);
            } else {
                // find place to input the value in ordered array
                for (let j = 0; j < orderedArray.length; j++) {
                    if (orderedArray[j] > array[i]) {
                        orderedArray.splice(j, 0, array[i]);
                        break;
                    }
                }
            }
        }
        return orderedArray
    }
    
    let groupedArray = []
    orderedArray(array).forEach(element => {
        if (groupedArray.length > 0 && groupedArray[groupedArray.length - 1][0] === element) {
            groupedArray[groupedArray.length - 1].push(element);
        } else {
            groupedArray.push([element])
        }
    })
    return groupedArray;
}

console.log(cleanRoom(input))

// Question 2: Write a javascript function that takes an array of numbers 
//and a target number. The function should find two different numbers in the 
// array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

function findNumbers(array, targetNumber) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetNumber) {
                return [array[i], array[j]]
            }
        }
    }
    return [];
}

// Question 3: Write a function that converts HEX to RGB. Then Make that 
// function auto-dect the formats so that if you enter HEX color format it 
// returns RGB and if you enter RGB color format it returns HEX.

// formula for calculating a value from hex pqxyrs
// R = 16*p + q     G = 16*x + y     B = 16*r + s

const convertHexValueToNumber = (hexElement) => {
    var reg = new RegExp('^[0-9]*$');

    if (reg.test(hexElement) === true) {
        return parseInt(hexElement, 10);
    }
    switch(hexElement) {
        case "A" :
            return 10;
        case "B" :
            return 11;
        case "C" :
            return 12;
        case "D" :
            return 13;
        case "E" :
            return 14;
        case "F" :
            return 15;
        default:
            throw `Invalid hex element ${hexElement} given!`;
    }
}

const convertNumberToHexValue = (number) => {
    if (number < 10) {
        return parseInt(number, 10);
    }
    switch(number) {
        case 10 :
            return "A";
        case 11 :
            return "B";
        case 12 :
            return "C";
        case 13 :
            return "D";
        case 14 :
            return "E";
        case 15 :
            return "F";
        default:
            throw `Invalid number ${number} given to calculate hex!`;
    }
}

const calcDec = (val1, val2) => {
    return 16 * val1 + val2
}

const determineNumberFormat = (numberString) => {
    if (numberString.length > 6) {
        return "rgb"
    } else {
        return "hex"
    }
}

function convertNumber(input) {
    if (determineNumberFormat(input) === "hex") {
        return convertHexToRgb(input)
    } else {
        return convertRgbToHex(input)
    }
}

function convertHexToRgb(hex) {
    let rgbValueArray = [];
    let firstHexValue = null;
    let hexValues = [...hex].map(num => {
        return convertHexValueToNumber(num);
    })

    hexValues.forEach(hexValue => {
        if (firstHexValue === null) {
            firstHexValue = hexValue;
        } else {
            rgbValueArray.push(calcDec(firstHexValue, hexValue));
            firstHexValue = null;
        }
    });
    return rgbValueArray.join(",");
}

function convertRgbToHex(rgb) {
    let hex = "";
    rgb.split(",").forEach(rgbValue => {
        let a = rgbValue / 16;
        let firstValue = Math.floor(a)
        let secondValue = Math.floor((a % 1).toFixed(2)*16)
        hex = hex.concat(convertNumberToHexValue(firstValue)).concat(convertNumberToHexValue(secondValue))
    });
    return hex;
}

// format of hex AA1122, format of rgb 255,204,153
// how to tell apart? length, commas, regex (correct would be to create regex pattern for both, 
// but shorter is to look at length, if longer than 6 symbols and contains , then it is rgb.