// function fetchDataFromAPI() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "John", age: 30, city: "New York" };
//       resolve(data);
//     }, 2000);
//   });
// }

// async function fetchDataFromAPI() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "John", age: 30, city: "New York" };
//       resolve(data);
//     }, 2000);
//   });
// }

async function fetchUserDataFromAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Ronak", age: 20, city: "Changa" };
      resolve(data);
    }, 1500);
  });
}

async function fetchUserDataFromAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Keval", age: 20, city: "Changa" };
      resolve(data);
    }, 1000);
  });
}

async function fetchUserDataFromAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Darshan", age: 20, city: "Nadiad" };
      resolve(data);
    }, 2000);
  });
}

async function fetchDataSequentially() {
  try {
    const userData1 = await fetchUserDataFromAPI1();
    console.log("User 1:", userData1);

    const userData2 = await fetchUserDataFromAPI2();
    console.log("User 2:", userData2);

    const userData3 = await fetchUserDataFromAPI3();
    console.log("User 3:", userData3);

    console.log("All data fetched successfully!");
  } catch (error) {
    console.error("Error:", error);
  }
}

console.log("Fetching user data sequentially...");
fetchDataSequentially();
