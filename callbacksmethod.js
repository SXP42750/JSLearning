const nums = [2,4,6,8]
console.log(nums.every(n => n%2 === 0)); //if all the condition is passed
console.log(nums.some(n=> n > 6)) // some is used if any condition is pass

const doubled =  nums.map(num=>num*2);

const even = nums.filter(n => n%2 === 0);

const sums = nums.reduce((acc,n) => acc+n,0)

const negative = [1,2,3,-5,-6]

console.log(negative.some(n => n<0))
