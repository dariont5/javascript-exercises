/*
Loop through Args:
    If Array includes Arg:
        Remove all from array
Return array
*/
const removeFromArray = function(array, ...args) {
    let newArray = array
    for (arg of args) {
        newArray = newArray.filter(item => item !== arg);
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
