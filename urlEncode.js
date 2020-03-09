const urlEncode = data => {
  return data.trim().replace(/\s/g, "%20");
};

module.exports = urlEncode;
