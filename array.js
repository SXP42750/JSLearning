// arrays are used to store collection of elements mostly of similar datatype

let names = ["kaushik","ram","shyam"]

console.log(names[0]) //accessing array with index

//calculating the average marks

let marks = [85,97,44,37,76,60];

let sum = 0;

for (let val of marks) {
  sum+= val;
}

let avg = sum / marks.length;

console.log(`avg marks of the class = ${avg}`);

// methods in arrays

let foodItems = ["potato","litchi","apples","tomato"]

console.log(foodItems.push("chips","burgers")) // used to insert value at the end 

let deletedItem = foodItems.pop(); // delete element from the end from the same array

console.log(foodItems)
console.log("deleted",deletedItem)
