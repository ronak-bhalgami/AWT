// Create an array of numbers
const numbersArray = [1, 2, 3, 4, 5];

console.log("Length of the array:", numbersArray.length);

console.log("Element at index 2:", numbersArray[2]);

numbersArray.push(6); 
console.log("Array after push:", numbersArray);

numbersArray.pop(); 
console.log("Array after pop:", numbersArray);

numbersArray.shift(); 
console.log("Array after shift:", numbersArray);

numbersArray.unshift(10);
console.log("Array after unshift:", numbersArray);

console.log("Joined array:", numbersArray.join(", ")); 

delete numbersArray[1];
console.log("Array after delete:", numbersArray);

const otherArray = [7, 8, 9];
const concatenatedArray = numbersArray.concat(otherArray);
console.log("Concatenated array:", concatenatedArray);

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.flat();
console.log("Flattened array:", flattenedArray);

const splicedArray = [1, 2, 3, 4, 5];
splicedArray.splice(1, 2, 10, 11); 
console.log("Spliced array:", splicedArray);

const slicedArray = [1, 2, 3, 4, 5];
const subArray = slicedArray.slice(1, 4); 
console.log("Sliced sub-array:", subArray);

const person = {
  name: "John Doe",
  age: 30,
  gender: "Male",
};

function displayPersonDetails(personObj) {
  console.log("Name:", personObj.name);
  console.log("Age:", personObj.age);
  console.log("Gender:", personObj.gender);
}

displayPersonDetails(person);
