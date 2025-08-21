function outer(){
    let count = 0;

function inner(){
    count++;
    return count;
}
return inner;
}

const myClosure = outer(); // outer function is done

console.log(myClosure()); // here the inner function has access to count even though outer() finished running.
console.log(myClosure());
console.log(myClosure())
console.log(myClosure())