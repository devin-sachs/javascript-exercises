const convertToCelsius = function(temp) {
  celcius = (temp -32) * (5/9);
  celcius = parseFloat(celcius.toFixed(1));
  return celcius;
};

const convertToFahrenheit = function(temp) {
  fahrenheit = temp * (9/5) + 32;
  fahrenheit = parseFloat(fahrenheit.toFixed(1));
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
