const palindromes = function (input) {

    let arrayNoSpace = input.replace(/\W/g, ''); // regex to replace all nonword characters. 
    let reversedArray = arrayNoSpace.split('').reverse().join('');
    console.log('nospace ' + arrayNoSpace);
    console.log('reversedArray ' + reversedArray);

    if (arrayNoSpace.toLowerCase() === reversedArray.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }

};

// let splitInput = input.split("");
// console.log(splitInput);

// let reverseSplit = splitInput.reverse();
// console.log(reverseSplit);

// joinSplit = reverseSplit.join("");
// console.log(joinSplit);

// if (joinSplit === input) {
//     return true;
// }
// else {
//     return false;
// }

// regex notes

// $ assertion Matches the end of input. If the multiline flag is set to true, also matches immediately before a line break character. For example, /t$/ does not match the "t" in "eater", but does match it in "eat".

// \w = Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to [A-Za-z0-9_]. For example, /\w/ matches "a" in "apple", "5" in "$5.28", "3" in "3D" and "m" in "Émanuel".

// \W = Matches any character that is not a word character from the basic Latin alphabet. Equivalent to [^A-Za-z0-9_]. For example, /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%" and "É" in "Émanuel".

//     let newArr = input.replace(/\W+$/, "").split(/\W+/).reverse().trim();
//     let index = 0;
//     reversedString = input.replace(/\w+/g, letter => {
//         return newArr[index++].split("").reverse().join('');
//     });

//     console.log('newArr ' + newArr);
//     console.log('reversedString ' + reversedString)
//     if (reversedString.toUpperCase() === input.toUpperCase()) {
//         return true;
//     }
//     else {
//         return false;
//     }
// };

// function process(s) {
//     let arr = s.replace(/\W+$/, "").split(/\W+/).reverse();
//     let index = 0;
//     return s.replace(/\w+/g, function () {
//         return arr[index++].split("").reverse().join("");
//     });
// }

//console.log(process("hello  howis.going"));


//The "g" after the regular expression is an option or flag that performs a global search, looking in the whole string and returning all matches. It is explained in detail below in Advanced Searching With Flags. 


// function process(s) {
//     let arr = s.replace(/\W+$/, "");
//     let arr2 = arr.split(/\W+/);
//     let arr3 = arr2.reverse();
//     console.log('arr ' + arr);
//     console.log('arr2 ' + arr2);
//     console.log('arr3 ' + arr3);

//     let index = 0;
//     return s.replace(/\w+/g, function () {
//         let arr4 = arr3[index++].split("");
//         let arr5 = arr4.reverse();
//         let arr6 = arr5.join("");
//         console.log('arr4 ' + arr4);
//         console.log('arr5 ' + arr5);
//         console.log('arr6 ' + arr6);
//         return arr6;
//     })
// };

// console.log(process("A car, a man, a maraca."));


// function process(s) {
//     let arr = s.replace(/\W+$/, "");
//     let arr2 = arr.split(/\W+/);
//     let arr3 = arr2.reverse();
//     console.log('arr ' + arr);
//     console.log('arr2 ' + arr2);
//     console.log('arr3 ' + arr3);

//     let index = 0;
//     return s.replace(/\w+/g, function () {
//         return arr[index++].split("")
//     })
// }

//     console.log(process("hello  howis.going"));


// Do not edit below this line
module.exports = palindromes;

