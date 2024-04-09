const fibonacci = function (num) {
    convertedNum = Number(num);
    if (convertedNum === 0) {
        return 0;
    }
    else if (convertedNum === 1 || convertedNum === 2) {
        return 1;
    }
    else if (convertedNum > 2) {
        let fibArray = [0, 1, 1];
        for (let iteration = 3; iteration <= convertedNum; iteration++) {
            let fibValue = fibArray[iteration - 1] + fibArray[iteration - 2];
            fibArray.push(fibValue);
        };
        let fibElement = fibArray.pop();
        return fibElement;
    }
    else {
        return 'OOPS';
    };
};

// ```javascript
// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8
// ```

// Do not edit below this line
module.exports = fibonacci;
