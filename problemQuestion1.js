//Question 1: Clean the room function: given an input of 
//[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that 
//organizes these into individual array that is ordered. 
//For example answer(ArrayFromAbove) should return: 
//[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//Bonus: Make it so it organizes strings differently from number 
//types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

const orderArray = (array) => {
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

const groupElementsInArray = (array) => {
    let groupedArray = []
    array.forEach(element => {
        if (groupedArray.length > 0 && groupedArray[groupedArray.length - 1][0] === element) {
            groupedArray[groupedArray.length - 1].push(element);
        } else {
            groupedArray.push([element])
        }
    })
    return groupedArray;
}

function cleanRoom(array) {    
    let orderedArray = orderArray(array)
    return groupElementsInArray(orderedArray)
}
console.log(cleanRoom(input))