const arr=[1,2,3,4,5,"str",80.42,true,false];

console.log(`Length of an array: ${arr.length}`);

console.log(`Element at index 3: ${arr[3]}`);

arr.push(42);
console.log(`After push operation: ${arr}`);

arr.pop();
console.log(`After pop operation: ${arr}`);

arr.shift()
console.log(`After shift operation: ${arr}`);

arr.unshift(42)
console.log(`After unshift operation: ${arr}`);

console.log(`Joined array: ${arr.join('|')}`);

delete arr[5];
console.log(`After delete operation: ${arr}`);

const arr2=[7,8,9,10.11,"XYX",false];
const cosncatenated_arr=arr.concat(arr2);
console.log(`Concatenated array: ${cosncatenated_arr}`);

const nested_array=[
    [1,50],
    ["abc","def"],
    [50.25,56.25],
    [true,false]
];
console.log(nested_array);
const flattened_arr=nested_array.flat();
console.log(`After flat operation: ${flattened_arr}`);

const spliced_Array = [1,2,3,4,5,6.5,false];
spliced_Array.splice(1,2,10,11);
console.log("spliced array:", spliced_Array);

const sliced_Array = [1, 2, 3, 4, 5];
const sub_Array = sliced_Array.slice(1, 4);
console.log("Sliced sub-array:", sub_Array);

const person={
    name: "Ronak",
    age: 20,
    gender: "Male"
};
console.log('\n');
function person_details(person)
{
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Gender: ${person.gender}`);
}

person_details(person);