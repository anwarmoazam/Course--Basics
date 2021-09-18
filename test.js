
// x = 7;


// console.log(x);
// console.log(getName);

// var x;

// function getName(){
//     console.log("Hello World!");
// }

// getName();

// var carName = "Volvo";

// let a = "World";

// {
//     let a = "Hello";
//     console.log(a);
// }

// console.log(a);

// function abc(){
//     let a = 5;
//     console.log(b);
//     {
//         var b = 10;
//     }
//     console.log(a);
//     console.log(b);
// }


// abc();


let names = ["Mohammad Ibrahim","Anwar Moazam","Mohammad Uzair","Sahil Khan"];

// for(let i=names.length-1;i>=0;i--){
//     console.log(`Hi ${names[i]}`);
// }


// for(let i=1;i<names.length;i=i+2){
//     console.log(`Hi ${names[i]}`);
//     console.log(`Hi ${names[i-1]}`);
// }


// function makeArray(num){
//     let newArray = [];
//     for(let i=1;i<=num;i++){
//         newArray.push(i);
//     }
//     return newArray;
// }

// console.log(makeArray(100));

// function sumOddEven(){
//     let sumEven = 0;
//     let sumOdd = 0;
//     let arr = [];
//     for(let i=1;i<=100;i++){
//         if(i%2 === 0){
//             sumEven += i;
//             arr[0] = sumEven;
//         } else{
//             sumOdd += i;
//             arr[1] = sumOdd;
//         }
//     }
//     return arr;
// }

// function sumOddEven(num1,num2){
//     let sumEven = 0;
//     let sumOdd = 0;
//     if(num1>num2){
//         for(let i=num2;i<=num1;i++){
//             if(i%2 === 0){
//                 sumEven += i;
//             } else{
//                 sumOdd += i;
//             }
//         }
//         console.log(`Sum of Even no. from ${num2} to ${num1} is : ${sumEven}`);
//         console.log(`Sum of Odd no. from ${num2} to ${num1} is : ${sumOdd}`);    
//     } else{
//         for(let i=num1;i<=num2;i++){
//             if(i%2 === 0){
//                 sumEven += i;
//             } else{
//                 sumOdd += i;
//             }
//         }
//         console.log(`Sum of Even no. from ${num1} to ${num2} is : ${sumEven}`);
//         console.log(`Sum of Odd no. from ${num1} to ${num2} is : ${sumOdd}`);    
//     }
// }


// function sumOddEven(num1,num2){
//     let sumEven = 0;
//     let sumOdd = 0;
//     let startNum = num1, endNum = num2;

//     if(num1>num2){
//         startNum = num2;
//         endNum = num1;
//     }

//     for(let i=startNum;i<=endNum;i++){
//         if(i%2 === 0){
//             sumEven += i;
//         } else{
//             sumOdd += i;
//         }
//     }
//     console.log(`Sum of Even no. from ${startNum} to ${endNum} is : ${sumEven}`);
//     console.log(`Sum of Odd no. from ${startNum} to ${endNum} is : ${sumOdd}`);    
// }

function sumOddEven(num1,num2){
    let sumEven = 0;
    let sumOdd = 0;
    let startNum = num1, endNum = num2;

    if(num1>num2){
        startNum = num2;
        endNum = num1;
    }

    for(let i=startNum;i<=endNum;i++){
        if(i%2 === 0){
            sumEven += i;
        } else{
            sumOdd += i;
        }
    }
    return [sumEven,sumOdd];
}

function result(a,b,c,d){
    let result1 = sumOddEven(a,b);
    let result2 = sumOddEven(c,d);
    let sumOfEven = result1[0]+result2[0];
    let sumOfOdd = result1[1]+result2[1];
    return `Difference of Even and Odd Numbers ${Math.abs(sumOfEven-sumOfOdd)}`;
}

console.log(result(5,50,70,100));
// console.log(result()(70,100));
// console.log(sumOddEven(500));

// DRY (Don't Repeat Yourself)

// 5-50 (Even sum, Odd Sum)
// 70-100 (Even sum, Odd Sum)
