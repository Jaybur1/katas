const conditionalSum = (arr, condition) => {
  if (arr.length === 0) return 0;
  if (condition === "even") return arr.filter(num => num % 2 === 0).reduce((a,b) => a + b);
  if (condition === "odd") return arr.filter(num => num % 2 !== 0).reduce((a,b) => a +b );
};

module.exports = conditionalSum;
