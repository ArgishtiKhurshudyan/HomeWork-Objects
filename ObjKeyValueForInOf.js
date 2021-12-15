let user = {
  age: 30,
  ols: 40,
  name: "John"
};

  for(let key of Object.values(user)){

    console.log(key);

  }
let sum = 0;
for (let key of Object.values(user)) {
  sum += key;
}
console.log(sum);
