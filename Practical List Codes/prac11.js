function fetchDataFromAPI(callback) {
  setTimeout(() => {
    const data = { name: "Ronak", age: 20, city: "Changa" };
    callback(data);
  }, 2000);
}

function processFetchedData(data) {
  console.log("Data received:", data);
  console.log("Processing data...");
  console.log("Data processing completed.");
}

console.log("Fetching data...");
fetchDataFromAPI(processFetchedData);
console.log("Data fetch operation initiated.");

console.log("Program continues to execute other tasks...");
