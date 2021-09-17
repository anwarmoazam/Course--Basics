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




var a = ["Anukampa","Sahil Bhai","Anwar Moazam","XYZ"];

let b = a[2];


const arr = [11,1,2,3,4,50,6,7,8,9,10];

const arrMapped = arr.map((element,index,array)=>{
    return element*element;
})

console.log(arr);

console.log(arrMapped);

const arrFiltered = arr.filter((element)=>{
    return element>4;
})

console.log(arrFiltered);

const arrReduced = arr.reduce((element,nextElement)=>{
    let temp = element;
    if(element<nextElement){
        temp = nextElement;
    }
    return temp;
})

console.log(`Large number of array is : ${arrReduced}`);

















