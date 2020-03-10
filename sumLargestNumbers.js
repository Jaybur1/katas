const sumLargestNumbers = array => {
  return array.sort((a, b) => b - a)[0] + array.sort((a, b) => b - a)[1];
};

module.exports = sumLargestNumbers;
