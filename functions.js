// const myFunction = new Function ("a","b","return a*b");

// let x = myFunction(4,3);
// console.log(`X = ${x}`);

(function (){
    let x = "Hello!!";
    console.log(x);
})();

function myFunction(a,b){
    return arguments.length;
}

const result = function(a,b){return a+b};

let z = result(5,10);

console.log(`Result = ${z}`);