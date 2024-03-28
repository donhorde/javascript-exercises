const convertToCelsius = function(value) {
  return Math.ceil(((value-32)*5/9)*10)/10;
};

const convertToFahrenheit = function(value) {
  return Math.ceil(((9/5 * value)+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
