const repeatString = function(string, occurences) {
    if (occurences < 0){
        return "ERROR";
    }
    let finalString = "";
    for (let index = 0; index < occurences; index++){
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
