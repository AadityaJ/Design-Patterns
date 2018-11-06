//utility functions
const listToStr = (list) => list((head, tail) => [head].concat(listToStr(tail)), () => []);

//main functions 
const List  = (head, tail) => (f) => f(head, tail);
const Null = (_, tail) => tail();

const append = (List1, List2) => List1((head, tail) => List(head, append(tail, List2), ()=> List2));   
// runner
const list1 = List(1, List(2, List(3,Null)));
console.log(listToStr(list1))
const list2 = List(4, List(5, Null));
console.log(append(list1, list2));
