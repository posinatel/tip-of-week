// Destructuring, alias and default parameter.
let { name, name:id, age = 30 } = { name: 'Carlos'};

console.log(name); // Carlos
console.log(id); // Carlos
console.log(age); // 30

// Swapping with array destructuring
[ id, age ] = [ age, id ];

console.log('id: ', id); // 30
console.log('age: ', age); // Carlos
