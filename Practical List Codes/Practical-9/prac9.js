// main

const condition = true; 

if (condition) {
  import("./moduleA.js")
    .then((module) => {
      module.greetA();
    })
    .catch((error) => {
      console.error("Error loading module A:", error);
    });
} else {
  import("./moduleB.js")
    .then((module) => {
      module.greetB();
    })
    .catch((error) => {
      console.error("Error loading module B:", error);
    });
}
