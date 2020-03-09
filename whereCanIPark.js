//regular can park only in R
//small cars park in R or S
//motorcycles park in R, S or M

const whereCanIPark = (data, type) => {
  const spot = [];
  data.forEach((x, index) => {
    switch (type) {
      case "regular":
        x.includes("R") ? spot.push(x.indexOf("R"), index) : false;
        break;
      case "small":
        if (x.includes("R")) {
          spot.push(x.indexOf("R"), index);
        } else if (x.includes("S")) {
          spot.push(x.indexOf("S"), index);
        }
        break;
      case "motorcycle":
        if (x.includes("M")) {
          spot.push(x.indexOf("M"), index);
          break;
        } else if (x.includes("S")) {
          spot.push(x.indexOf("S"), index);
          break;
        } else if (x.includes("R")) {
          spot.push(x.indexOf("R"), index);
          break;
        }
        break;
    }
  });

  return spot.length > 0 ? spot.slice(0, 2) : false;
};

module.exports = whereCanIPark;
