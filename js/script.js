// let arr = [10,20,30,40,50];
// console.log(arr);

// let [a,b, c, d, e] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

let user = {
  name: "John",
  age: 30,
  city: "New York",
  adress: {
    street: "123 Main St",
    city: "New York",
  },
};
console.log(user);

let {
  name,
  age,
  city,
  adress: { street, city: city2 },
} = user;
console.log(name);
console.log(age);
console.log(city);
console.log(street);
console.log(city2);
console.log(user.adress.street);
