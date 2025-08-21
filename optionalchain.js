const user = {
  name: "Alice",
  address: {
    city: "Paris"
  }
};

console.log(user.address.city);       // ✅ Works: "Paris"       
console.log(user.profile?.city);      // ✅ undefined (no crash!)
