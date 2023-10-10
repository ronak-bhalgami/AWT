// Simulated function to fetch data from an API asynchronously
function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Ronak", age: 20, city: "Changa" };
      resolve(data);
    }, 2000);
  });
}

console.log("Fetching data from the API...");
fetchDataFromAPI()
  .then((data) => {
    console.log("Data received:", data);
    console.log("Processing data...");
    console.log("Data processing completed.");
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("API request completed.");
  });

console.log("Program continues to execute other tasks...");
