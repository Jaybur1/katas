const camelCase = input => {
  return input
    .split(" ")
    .map((word, index) =>
      index !== 0 ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join("");
};

module.exports = camelCase;
