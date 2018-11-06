// utility functions
const Kestral = (a, _) => a;
const Kite = (_, b) => b;

//main functions

const Pair  = (left, right) => f => f(left, right);

const first = Pair => Pair(Kestral);
const second = Pair => Pair(Kite);

//runners
console.log(Kestral(1,2));
console.log(Kite(1,2));

const Pair1 = Pair("Hello",2);

console.log(first(Pair1));
console.log(second(Pair1));
