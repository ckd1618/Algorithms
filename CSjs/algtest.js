var x = { 'r': 1 };

delete x['r'];
console.log(x);

console.log(Object.entries(x).length);
console.log({});