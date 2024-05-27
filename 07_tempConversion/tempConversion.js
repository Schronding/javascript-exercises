const convertToCelsius = function(tempFarenheit) {
  let tempCelcius = (tempFarenheit - 32) / 1.8;
  tempCelcius = Math.ceil(tempCelcius * 10) 
  tempCelcius /= 10; 
  return tempCelcius;
};

const convertToFahrenheit = function(tempCelcius) {
  let tempFarenheit = (tempCelcius * 1.8) + 32;
  tempFarenheit = Math.ceil(tempFarenheit * 10) 
  tempFarenheit /= 10; 
  return tempFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
