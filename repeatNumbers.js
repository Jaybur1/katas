const repeatNumbers = data => {
  let output = [];
  data.forEach(arr => {
    let str = "";
    for (let i = 0; i < arr[1]; i++) {
      str += `${arr[0]}`;
    }
    output.push(str);
  });
  return output.length > 1 ? output.join(", ") : output.join("");
};

module.exports = repeatNumbers;
