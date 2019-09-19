const weathers = {
  temp: 23,
  pressure: 30,
  humidity: 30
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  weathers
};
