function removeFromArray(inputArray, ...removeValue) {
    //console.log(removeValue.length);
    //console.log(inputArray);
    for (let removeLoop = 0; removeLoop < removeValue.length; removeLoop++)  {
        index = inputArray.indexOf(removeValue[removeLoop]);
        //console.log('index ' + index);
        //console.log('Loop # ' + removeLoop);
        if (index > -1){
            inputArray.splice(index, 1);
            //console.log('inputArray' + inputArray)
        }
        else{
            continue;
        }
    }
    return inputArray;
}

let  array = [1,2,3,4];

removeFromArray(array, 7);

// Do not edit below this line

module.exports = removeFromArray;