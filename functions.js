// basic function declaration and defination
// problem to check if the number is even or not

function isEven(num) {
  if(num%2 == 0){
    return true
  }
  else
  {
    return false;
  }

}
console.log(isEven(4))

// function expression here we store the expression in a variable and access it as a function

let greet = function(user){
  console.log("Hello " + user);
  return 1;
}

console.log(greet('kaushik'))