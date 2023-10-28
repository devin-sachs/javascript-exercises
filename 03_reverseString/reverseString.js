const reverseString = function(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    //may also chain functions like so: return splitString.split("").reverse().join("");

    return joinArray;
};

console.log(reverseString('Hello'));

// Do not edit below this line
module.exports = reverseString;
