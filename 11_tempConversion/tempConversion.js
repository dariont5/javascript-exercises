const convertToCelsius = function(temperature) {
  let converted = ((temperature-32)*5/9);
  if (Number.isInteger(converted)) {
    return converted
  }
  return +((temperature-32)*5/9).toFixed(1);
};

const convertToFahrenheit = function(temperature) {
  let converted = (temperature*9/5+32);
  if (Number.isInteger(converted)) {
    return converted
  }
  return +(temperature*9/5+32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
