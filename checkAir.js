const checkAir = (samples, threshold) => {
  const dirtySamples = samples.filter(sample => sample === "dirty");
  const thresH = threshold * samples.length;
  return samples.length - samples.length / dirtySamples.length < thresH
    ? "Clean"
    : "Polluted";
};

module.exports = checkAir;
