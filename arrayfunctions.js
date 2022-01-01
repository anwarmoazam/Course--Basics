// find, findIndex, includes, flat and flatMap

let myArray1 = [1,2,3,4,5,6,7,8,9,10];

let myArray2 = ["Mohammad Iqbal","Anwar Moazam","Hafizur Rehman","Mohammad Aadil","Mohammad Qamil"];

console.log("Length of Array1 : ",myArray1.length);

console.log("Length of Array2 : ",myArray2.length);

// find function - It takes callback function and returns first element of an array 
let result = myArray1.find((element)=>{return (element>5)});
console.log(`First element greater than 5 is : ${result}`);

// findIndex function - It takes callback function and return first Index of match condition in an array
result = myArray1.findIndex((element)=>{return element>8});
console.log(`Index of element greater than 8 is : ${result}`); 

// includes function
result = myArray1.includes(51);
console.log(`Element in array is : ${result}`);

// flat function - This function flat values of an array in one dimensional
let myArray3 = [[1],[[2]],[[[3]]],4,5,[6]];
let result1 = myArray3.flat(1); //It will flat myArray3 with one level
console.log('Result of flat(1) is : ',result1);

let result2 = myArray3.flat(2); //It will flat myArray3 with second level
console.log('Result of flat(2) is : ',result2);

let result3 = myArray3.flat(3); //It will flat myArray3 with third level
console.log('Result of flat(3) is : ',result3);

let result4 = myArray3.flat(4); //It will flat myArray3 with fourth level
console.log('Result of flat(4) is : ',result4);

let result5 = myArray3.flat(Infinity); //If we dont know how deep array is, we can use Infinity with flat function
console.log('Result of flat(Infinity) is : ',result5);

// flatMap function
result = myArray1.map((val,index)=>[val,myArray2[index]]); //map two arrays with map function

result = myArray1.flatMap((val,index)=>[val,myArray2[index]]); //map two arrays with flatMap function

console.log(result);