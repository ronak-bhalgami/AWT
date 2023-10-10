const fs = require("fs"); 

function readFileAsync(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      callback(err, null); 
      return;
    }
    callback(null, data); 
  });
}

const filePath = "sample.txt"; 

console.log("Reading file asynchronously...");
readFileAsync(filePath, (err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("File contents:");
    console.log(data);
  }
});
