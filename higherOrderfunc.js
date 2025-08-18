function applyOperation(a, b, operation) {
  return operation(a, b); // operation is a function
}

function add(x, y) {
  return x + y;
}

function multiply(x,y)
{
return x*y;
}

console.log(applyOperation(5, 3, add))
console.log(applyOperation(5,4,multiply))