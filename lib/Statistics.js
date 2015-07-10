'use strict';

function pairCalculation(times, ...lists) {


  return sum;
}

/**
 * The mean function
 * @param {Array} values - the collection number list
 * @returns {number}
 */
const mean = function (values) {
  return values.reduce((a, b) => {
      return a + b;
    }) / values.length;
};

/**
 * Calculate the variance
 * @param {Array} values - the collection number list
 * @param {number} mean - the mean from the list
 * @returns {number}
 */
const variance = function (values, mean) {
  let sum = values.reduce((a, b) => {
    return a + Math.pow(b - mean, 2);
  }, 0);

  return sum / values.length;
};

/**
 * Calculate the covariance
 * @param {number} times
 * @param {Array} lists
 * @returns {number}
 */
const covariance = function (times, ...lists) {
  let sum = 0;

  for (let i = 0, size = times; i < size; i++) {
    let dot = [];

    lists.forEach((item) => {
      dot.push({
        value: item.values[i]
        , mean: item.mean
      });
    });

    let result = dot.reduce((a, b) => {
      return a * (b.value - b.mean);
    }, 1);

    sum += result;
  }

  return sum / times;
};

/**
 * Calculate the standard deviation
 * @param {Array} values - the collection number list
 * @param {number} mean - the mean from the list
 * @returns {number}
 */
const standardDeviation = function(values, mean) {
  return Math.sqrt(variance(values, mean));
};


/**
 * Calculate the correlation
 * @param {number} values - the multiplier value
 * @param {Array} values - the collection number list
 * @returns {number}
 */
const correlation = function(times, ...lists) {
  let dividend = covariance(times, ...lists);
  let divisor = 1;
  lists.forEach((list) => {
    divisor *= standardDeviation(list.values, list.mean);
  });

  return dividend / divisor;
};

module.exports = {mean, variance, covariance, standardDeviation, correlation};
