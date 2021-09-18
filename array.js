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

<<<<<<< HEAD
console.log(arr);

console.log(arrMapped);
=======
// Map, Filter and Reduce in JavaScript

let arr = [1,2,3,4,5,6,7,5,4,4,2,2,1,3,85];
>>>>>>> 06342fee5b7aa3d9d3dac828943f191a1aec7658

const arrFiltered = arr.filter((element)=>{
    return element>4;
})

<<<<<<< HEAD
console.log(arrFiltered);
=======
let arr1 = arr.map(x => x+2).reverse();
>>>>>>> 06342fee5b7aa3d9d3dac828943f191a1aec7658

const arrReduced = arr.reduce((element,nextElement)=>{
    let temp = element;
    if(element<nextElement){
        temp = nextElement;
    }
    return temp;
})

<<<<<<< HEAD
console.log(`Large number of array is : ${arrReduced}`);
=======
console.log(arr1);

let ages = [1,2,3,4,5,15,55,22,14,36,30,21,31,9,10];

console.log(ages);
console.log(ages.map(x=>x*x));
// let adult = ages.filter(checkAdult);
// console.log(ages);
// console.log(adult);
>>>>>>> 06342fee5b7aa3d9d3dac828943f191a1aec7658


function checkAdult(age){
    return age>=18;
}

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr);

const newAges = ages.reduce(myFunc);

function myFunc(first,second){
    return first-second;
}

console.log(newAges);

const numbers1 = [15.5, 2.3, 1.1, 4.7];//2+1+5+16

const newNumber = numbers1.reduce(getSum, 0);

function getSum(total, num) {
    return total + Math.round(num);
}

console.log(newNumber);












