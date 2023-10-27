function repeatString(string, num) {
    let newString = '';
    if (num < 0) {
        return "ERROR";
    }
    else{
        for(let loopNum = 0; loopNum < num; loopNum++){
            newString += string
            console.log(newString);
        }
        return newString
    }
 
};

repeatString('hey',3);

// Do not edit below this line
module.exports = repeatString;
