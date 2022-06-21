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