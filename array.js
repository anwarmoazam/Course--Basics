const cars = ["Saab", "Volvo", "BMW"];
// let carsDOM = document.getElementsByClassName(".para");
// for(let car of cars){
//     carsDOM.innerHTML = car;
// }

// for(let i=0; i<cars.length;i++){
//     console.log(cars[i]);
// }
cars.push("Maruti");

cars.unshift("MG Hector");

// cars.pop();

for(car of cars){
    console.log(car);
}

console.log(cars);




// var a = ["Anukampa","Sahil Bhai","Anwar Moazam","XYZ"];

// let b = a[2];


const arr = [11,1,2,3,4,50,6,7,8,9,10];

const arrMapped = arr.map((element,index,array)=>{
    return element*element;
})

console.log(arr);

console.log(arrMapped);

const arrFiltered = arr.filter((element)=>{
    return element>4;
})

// console.log(arrFiltered);

const arrReduced = arr.reduce((element,nextElement)=>{
    let temp = element;
    if(element<nextElement){
        temp = nextElement;
    }
    return temp;
})

// console.log(`Large number of array is : ${arrReduced}`);


function checkAdult(age){
    return age>=18;
}

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
// console.log(newArr);

// const newAges = ages.reduce(myFunc);

function myFunc(first,second){
    return first-second;
}

// console.log(newAges);

const numbers1 = [15.5, 2.3, 1.1, 4.7];//2+1+5+16

const newNumber = numbers1.reduce(getSum, 0);

function getSum(total, num) {
    return total + Math.round(num);
}

// console.log(newNumber);

function toArray(obj){
    let newArr = [];
    for(let element in obj){
        newArr.push([element,obj[element]]);
    }
    return newArr;
}
console.log(toArray({a:1,b:2}));

/* 
Return the Objects Keys and Values
Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
Notes
Remember to sort the keys. */

// function keysAndValues(obj){
//     let newArr=[];
//     newArr.push(Object.keys(obj),Object.values(obj));
//     console.log(newArr);
// }

function keysAndValues(obj){
    let result=[];
    let keys=[];
    let values=[];
    for(let element in obj){
        keys.push(element);
        values.push(obj[element]);
    }
    result.push(keys,values);
    return result;
}

// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// keysAndValues({ a: 1, b: 2, c: 3 });
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })

let obj = {a: 1, b: 2, c: 3};
// console.log(Object.entries(obj));

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
//Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:
Only one valid answer exists. */
/*
1. create a function who takes two parameter which is an array and target
2. create a result named empty array which is store index
3. create initial named variable and assign first element in it
4. run loop and check if arr[i] equal to target then return index of 
*/


function twoSum(arr,target){
    let result = [];
    let first = arr[0];
    second = 0;
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            result.push(arr.indexOf(arr[i]))
            return result;
        } 
        first = arr[i];
        for(let j=i+1;j<arr.length;j++){
            second = arr[j];
            sum = first + second;
            if(sum===target){
                result.push(arr.indexOf(arr[i]));
                result.push(j);
                return result;
            }
        }
    }
}
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([9,7,11,15],22eE));
console.log(twoSum([3,2,1],4));
console.log(twoSum([3,3],6));

