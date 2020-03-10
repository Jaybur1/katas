const numberOfVowels = data => {
  const vowels = "aeiou";
  return data
    .toLowerCase()
    .split("")
    .filter(letter => vowels.includes(letter)).length;
};

module.exports = numberOfVowels;
