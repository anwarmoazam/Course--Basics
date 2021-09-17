let names = ["Mohammad Ibrahim","Anwar Moazam","Mohammad Uzair","Sahil Khan"];

// Print all elements with "Hi"
// Print all elements with "Hi" Reverse
// Print as "Hi" Anwar Moazam, Ibrahim,Sahil, Uzair

// for(let i=0;i<names.length;i++){
//     console.log("Hi,",names[i]);
// }

// for(let i=names.length-1;i>=0;i--){
//     console.log("Hi,",names[i]);
// }

for(let i=1;i<names.length;i=i+2){
    console.log("Hi,",names[i]);
    console.log("Hi,",names[i-1]);
}

function newArray(number){
    let temp=[];
    for(let i=1;i<=number;i++){
        temp.push(i);
    }
    return temp;
}

// newArray(50);

const mappedArray = newArray(50).map((ele)=>{
    return ele;
})

// console.log(mappedArray);


// How Much is True?
// Create a function which returns the number of true values there are in an array.

function countTrueArray(trueArray){
    let count = 0;
    for(let i=0;i<trueArray.length;i++){
        if(trueArray[i]===true){
            count++;
        }
    }
    return count;
}

let a = [true,false,false,false,false,false];

// console.log(countTrueArray(a));

/*Converting Objects to Arrays
Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []
Notes
Return an empty array if the object is empty.*/


// function objectToArray(obj){
//     let keys = Object.keys(obj);
//     let value = Object.values(obj);
//     const newArray = [];
//     for(let i=0;i<keys.length;i++){
//         let subArray = [];
//         for(let j=0;j<keys[i].length;j++){
//             subArray.push(keys[i],value[i]);
//         // console.log(keys[i],value[i]);
//         }
//         newArray.push(subArray);
//     }
//     // for(const key in obj){
//     //     // newArray.push([key,obj[key]]);
//     // }
//     return newArray;
// }


function objectToArray(obj){
    const newArray = [];
    for(const key in obj){
        newArray.push([key,obj[key]]);   //we can access object keyname of any object by var name and value of object by object name[var name] using for in loop 
    }
    return newArray;
}

console.log(objectToArray({a:1,b:2,c:3,d:4,e:5}));
console.log(objectToArray({}));


// const random = [2,41,12,65,3,4,5,7,85];

// function getMaxNumber(value){
//     let arr = value.reduce((element,next)=>{
//         let max = element;
//         if(max<next){
//             max=next;
//         }
//         return max;
//     })
// }

// const random = [209,41,12,65,3,4,5,7,85];

// function getMaxNumber(value){
//     let max = value[0];
//     for(let i=1;i<value.length;i++){
//         if(value[i]>max){
//             max=value[i]
//         }
//     }
//     return max;
// }

// console.log(getMaxNumber(random));


const random = [-12,-30,-2,-3,-45,-5,-55,-60];


function getSecondMaxNumber(value){
    let max=value[0];
    let secondMaxNumber=max;
    for(let i=1;i<value.length;i++){
        if(value[i]>max){
            secondMaxNumber=max;
            max=value[i];
        }else if(value[i]>secondMaxNumber && value[i]!==max){
            secondMaxNumber=value[i];
        }
    }
    return secondMaxNumber;
}

console.log(`Second Largest Number of an array [${random}] is :- ${getSecondMaxNumber(random)}`);


// function secondLargest(arr) {
//     var max = arr[0];
//     var secondMax = 0;
//     for(let i=0; i<arr.length; i++) {
//       if(arr[i] > max) {
//         secondMax = max;
//         max = arr[i];
//       }
//       else if(arr[i] > secondMax && arr[i] !== max) {
//         secondMax = arr[i];
//       }
//     }
//     return secondMax;
//   }

