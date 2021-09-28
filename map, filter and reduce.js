

const arr = [2,3,5,4,0,1];

// map function

const outputMap = arr.map(binary);
console.log(outputMap);

const outputFilter = arr.filter(divisibleBy3);
console.log(outputFilter);

function double(x){
    return x*2;
}

function triple(x){
    return x*3;
}

function binary(x){
    return x.toString(2);
}

// filter function

function isOdd(x){
    return x%2;
}

function isEven(x){
    return x%2 === 0;
}

function greaterThan4(x){
    return x>4;
}

function divisibleBy3(x){
    return x%3===0;
}

// filter function

// sum by traditional for loop
function sumValue(value){
    let sum = 0;
    for(let i=0;i<value.length;i++){
        sum=value[i]+sum;
    }
    return sum;
}

console.log(sumValue(arr));

// sum by reduce function
const outputReduce = arr.reduce(findSum,0);

function findSum(acc,curr){
    acc = acc + curr;
    return acc;
}

console.log(outputReduce);

// find Max by traditional for loop
function findMax(value){
    let max = 0;
    for(let i=0;i<value.length;i++){
        if(value[i]>max){
            max = value[i];
        }
    }
    return max;
}

console.log(findMax(arr));

function findMaxReduce(max,curr){
    if(curr>max){
        max=curr;
    }
    return max;
}

const outputReduceMax = arr.reduce(findMaxReduce,0);
console.log(outputReduceMax)

const users = [
    {firstname:"Anwar", lastname: "Moazam", age:36, address:"Pali",mobile:9785355186},
    {firstname:"Mohammed", lastname: "Aadil", age:11, address:"Jaipur",mobile:9414167692},
    {firstname:"Mohammed", lastname: "Iqbal", age:38, address:"Jaipur",mobile:9414167692},
    {firstname:"Gajendra", lastname: "Sharma", age:36, address:"Jodhpur",mobile:9929108528},
    {firstname:"Hafizur", lastname: "Rehman", age:34, address:"Hyderabad",mobile:8058123786},
    {firstname:"Ankit", lastname: "Mathur", age:36, address:"Jodhpur",mobile:9414327375},
    {firstname:"Vikas", lastname: "Marwal", age:38, address:"Ajmer",mobile:9784859777},
    {firstname:"Aaliya", lastname: "Rizvi", age:10, address:"Pali",mobile:9785355186},
    {firstname:"Mohammed", lastname: "Uzair", age:3, address:"Pali",mobile:9785355186}
];

const outputFullName = users.map(getName);

function getName(x){
    return x.firstname + " " + x.lastname;
}

console.log(outputFullName);

function getSameAge(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    } else{
        acc[curr.age]=1;
    }
    return acc;
}

const sameAge = users.reduce(getSameAge,{});
console.log(sameAge);

function ageLessThan30(acc,curr){
    if(curr.age<30){
        acc.push(curr.firstname);
    }
    return acc;
}

const lessThan30 = users.reduce(ageLessThan30,[]);
console.log(lessThan30);

let salaries = [5000,8000,10000,6000,12000];

let totalSalaries = salaries.reduce((acc, curr)=>acc+curr);
console.log(totalSalaries);