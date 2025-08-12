let book = {     // object creation 
  title: "nother",
  author: "saler",
  pages: 100,
  info: function() {
    console.log("Hello, " + this.Author); // here this is points to the current object 
  book.getDetails = function() {
  return this.Title + " by " + this.Author + " has " + this.pages + " pages.";
};

console.log(book.getDetails());   // accessing using dot operator
// Output: nother by saler has 100 pages.

  }
};

console.log(book.title)