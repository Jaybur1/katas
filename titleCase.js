const capitalize = (word) => {
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

const titleCase = (string) => {
  if(!string) return string
  return string.split(' ').map(word => capitalize(word)).join(' ');
};


module.exports = titleCase;