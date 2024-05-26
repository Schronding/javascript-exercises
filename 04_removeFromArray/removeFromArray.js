const removeFromArray = function(array, ...args) {
    return array.filter(function (value){
        return !args.includes(value); 
    });
};

// Do not edit below this line
module.exports = removeFromArray;
