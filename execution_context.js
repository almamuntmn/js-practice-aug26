// Execution Context

let a = 10;

function one() {
  two();
  console.log("I am function One");
}
function two() {
  three();
  console.log("I am function Two");
}
function three() {
  console.log("I am function Three");
}

let b = 20;

one();

