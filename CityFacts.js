//The string should have the following format: X has a population of Y and is situated in Z (where X is the city
//name, Y is the population and Z is the continent the city is situated in).

function cityFacts({ name, population, continent }) {
  let x = "has a population",
    y = "and is situated in";
  return name + " " + x + " " + population + " " + y + " " + continent;
}

console.log(

  
  cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
  })
);
