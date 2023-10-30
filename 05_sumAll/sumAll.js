const sumAll = function(start, end) {
    let sumTotal = 0;
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        console.log('ERROR');
        return('ERROR');
    }
      
    else if (start < 0 || end < 0) {
        console.log('ERROR');
        return('ERROR');
    }
    else if (start < end && start > 0 && end > 0) {
        for(let sumStep = start; sumStep <= end; sumStep++) {
            console.log('sumStep ' + sumStep);
            sumTotal += sumStep;
            console.log('sumTotalloop ' + sumTotal);
        }
    }
  
    else if (start > end && start > 0 && end > 0){ 
        console.log('Start is larger than end');
        for(let sumStep = start; sumStep >= end; sumStep--) {
            console.log('sumStep ' + sumStep);
            sumTotal += sumStep;
            console.log('sumTotalloop ' + sumTotal);
        }
    }
    else{ 
        console.log('ERROR');
        return('ERROR');
    }
    console.log('Final Total:' + sumTotal);
    return sumTotal;
};
sumAll(10,"90");

// Do not edit below this line
module.exports = sumAll;
