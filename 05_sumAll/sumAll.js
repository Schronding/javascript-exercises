const sumAll = function(small, large) {
    if (!Number.isInteger(small) || !Number.isInteger(large)){
        return "ERROR"; 
    }

    if (large < 0 || small < 0){
        return "ERROR";
    }
    
    if (large < small){
        let temp = large;
        large = small;
        small = temp;
    }

    let result = 0;
    while (small <= large){
        result += small++; 
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;
