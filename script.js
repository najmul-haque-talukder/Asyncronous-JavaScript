console.log("Task 01 is complete");
console.log("Task 02 is complete");
setTimeout(() => {
  console.log("Task 03 is complete");
}, 2000);
console.log("Task 04 is complete");
console.log("Task 05 is complete");

//! promise => pending, resolve, reject
fetch('https://fakestoreapi.com/products/1')
  .then((resolve) => resolve.json())
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
