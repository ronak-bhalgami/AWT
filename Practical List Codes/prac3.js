//1. The let keyword
let x=42;
x=43;

//2. The const keyword
const y=42;
// y=43; //Gives an error

//3. Arrow function
const add=(a,b)=>a+b;

//4. The (Spread Of) ... Operator
let arr1=[1,2,3];
let arr2=[4,5];

arr1=[...arr1,...arr2];
console.log(arr1);  

//5. For/of
for(const num of arr1)
{
    console.log(num);
}

//6. Map Object
const map=new Map();
map.set("Name","Ronak");
map.set("Age", 20);
for([key,value] of map){
    console.log(`${key}: ${value}`);
    }

//7. Set Object
const set=new Set([1,1,2,2,3,3,4,4]);
console.log(set)

//8. Classes
class person
{
    constructor(name)
    {
        this.name=name;
    }
    greet()
    {
        console.log(`Hello, I'm ${this.name}`)
    }
}

const person1=new person("Ronak");
person1.greet();

//9. Promises
// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//       if (dataFetchedSuccessfully) {
//         resolve(data);
//       } else {
//         reject(error);
//       }
//     });
//   };
// fetchData()
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));


//10. Symbol
const mySym=Symbol("mySym");
const obj={
    [mySym]: "This is my symbol",
};

//11. Default Parameter
const greet = (name = "Guest") => {
    console.log(`Hello, ${name}`);
  };
  greet();
  greet("Ronak"); 
  

//12. Default Parameter
const sum=(...num)=>{
    return num.reduce((pv,num)=>pv+num,0);
};
console.log(sum(1,2,3,4,5,6,7,8,9,10));