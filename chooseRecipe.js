const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  const ingrArr = [...bakeryA,...bakeryB];
  let output = "";
  recipes.forEach(recipe => {
    let goodToGo = [];
    recipe.ingredients.forEach(ingr => {
      goodToGo.push(ingrArr.includes(ingr))
    })
    if(!goodToGo.includes(false)) output = recipe.name;
  })
  return output;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"]
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"]
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"]
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"]
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"]
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"]
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
