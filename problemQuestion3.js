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
