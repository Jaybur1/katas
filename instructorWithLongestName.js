const instructorWithLongestName = data => {
  return data.sort((a, b) => b.name.length - a.name.length)[0];
};

module.exports = instructorWithLongestName;
