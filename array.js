const cars = ['Saab', 'Volvo', 'BMW'];
// let carsDOM = document.getElementsByClassName(".para");
// for(let car of cars){
//     carsDOM.innerHTML = car;
// }

// for(let i=0; i<cars.length;i++){
//     console.log(cars[i]);
// }
cars.push('Maruti');

cars.unshift('MG Hector');

// cars.pop();

for (car of cars) {
	console.log(car);
}

console.log(cars);

// var a = ["Anukampa","Sahil Bhai","Anwar Moazam","XYZ"];

// let b = a[2];

const arr = [11, 1, 2, 3, 4, 50, 6, 7, 8, 9, 10];

const arrMapped = arr.map((element, index, array) => {
	return element * element;
});

// console.log(arr);

// console.log(arrMapped);

const arrFiltered = arr.filter((element) => {
	return element > 4;
});

// console.log(arrFiltered);

const arrReduced = arr.reduce((element, nextElement) => {
	let temp = element;
	if (element < nextElement) {
		temp = nextElement;
	}
	return temp;
});

// console.log(`Large number of array is : ${arrReduced}`);

function checkAdult(age) {
	return age >= 18;
}

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
// console.log(newArr);

// const newAges = ages.reduce(myFunc);

function myFunc(first, second) {
	return first - second;
}

// console.log(newAges);

const numbers1 = [15.5, 2.3, 1.1, 4.7]; //2+1+5+16

const newNumber = numbers1.reduce(getSum, 0);

function getSum(total, num) {
	return total + Math.round(num);
}

// console.log(newNumber);

function toArray(obj) {
	let newArr = [];
	for (let element in obj) {
		newArr.push([element, obj[element]]);
	}
	return newArr;
}
// console.log(toArray({a:1,b:2}));

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

function keysAndValues(obj) {
	let result = [];
	let keys = [];
	let values = [];
	for (let element in obj) {
		keys.push(element);
		values.push(obj[element]);
	}
	result.push(keys, values);
	return result;
}

// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// keysAndValues({ a: 1, b: 2, c: 3 });
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })

let obj = { a: 1, b: 2, c: 3 };
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

function twoSum(arr, target) {
	let result = [];
	// let first = arr[0];
	second = 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			result.push(arr.indexOf(arr[i]));
			return result;
		}
		let first = arr[i];
		for (let j = i + 1; j < arr.length; j++) {
			second = arr[j];
			sum = first + second;
			if (sum === target) {
				result.push(arr.indexOf(arr[i]));
				result.push(j);
				return result;
			}
		}
	}
}
// console.log(twoSum([2,7,11,15],9));
// console.log(twoSum([9,7,11,15],22));
// console.log(twoSum([3,2,1],4));
// console.log(twoSum([3,3],6));

// function twoSumTarget(arr,target) {
// 	var result = [];
//     	for (var i = 0; i < arr.length; i++) {
// 	    	for (var j = i + 1; j < arr.length; j++) {
// 		    	if (arr[i] + arr[j] === target) {
// 			    	result.push(i);
// 				    result.push(j);
// 		    	}
// 		    }
// 	    }
// 	    return result;
// }

// console.log(twoSumTarget([2,7,11,15],9));
// console.log(twoSumTarget([9,7,11,15],22));
// console.log(twoSumTarget([3,2,1],4));
// console.log(twoSumTarget([3,3],6));

function twoSumTarget(arr, target) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				result.push(i);
				result.push(j);
				return result;
			}
		}
	}
	return result;
}

// console.log(twoSumTarget([2,7,11,15],9));
// console.log(twoSumTarget([9,7,11,15],22));
// console.log(twoSumTarget([3,2,1],4));
// console.log(twoSumTarget([3,3],6));

let names = ['Anwar Moazam', 'Gajendra Sharma', 'Moien Sir'];

// let myName = [...names];
let otherNames = ['Anukampa', 'Aaliya', 'Tarannum'];

let allNames = [...names, ...otherNames];

// console.log(allNames);

let [a, b] = [10, 20];

let [, , thirdName] = allNames;

console.log(thirdName);

let myObj = {
	fname: 'Anwar Moazam',
	lname: 'Rizvi',
	gender: 'Male',
	mobile: 9785355186,
	address: {
		hno: 39,
		street: 'Shiv Nagar',
		city: 'Pali',
	},
};

console.log(myObj.fname);

let {
	mobile: myNum,
	address: { city: myCity },
} = myObj;

console.log(myNum, myCity);

// var employee = {    // Object we want to destructure
//     firstname: 'Jon',
//     lastname: 'Snow',
//     dateofbirth: '1990'
// };

// // Destructuring the object into our variables
// var { firstname, lastname, dateofbirth } = employee;
// console.log( firstname, lastname, dateofbirth);

function newTwoSum(arr, target) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				result.push(i);
				result.push(j);
			}
		}
	}
	return result;
}

// [2,7,11,15], target = 9

// console.log(newTwoSum([2, 7, 11, 15], 9));

/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []

Example 3:
Input: nums = [0]
Output: [] */

function tripletsChk(arr) {
	let output = [];
	for (let i = 0; i < arr.length; i++) {
		// console.log(`I : ${arr[i]}`);
		for (let j = i + 1; j < arr.length; j++) {
			// console.log(`J : ${arr[j]}`);
			for (let k = j + 1; k < arr.length; k++) {
				// console.log(`I : ${arr[i]}`);
				// console.log(`J : ${arr[j]}`);
				// console.log(`K : ${arr[k]}`);
				if (arr[i] !== arr[j] && arr[i] !== arr[k] && arr[j] !== arr[k] && arr[i] + arr[j] + arr[k] === 0) {
					console.log(arr[i], arr[j], arr[k]);
					output.push([arr[i], arr[j], arr[k]]);
					// output.push([arr[j]);
					// output.push(arr[k]);
					// console.log(arr[i],arr[j],arr[k]);
				}
			}
		}
	}
	return output;
}

console.log(tripletsChk([-1, 0, 1, 2, -1, -4]));
console.log(tripletsChk([]));
console.log(tripletsChk([0]));

function twoSum(num1, num2 = 100) {
	console.log(arguments);
	console.log(arguments.length);
	return num1 + num2;
}

console.log(twoSum(2, 28));

function getMatrix(row, column, value) {
	let matrix = [];
	for (let i = 0; i < row; i++) {
		let inner = [];
		for (let j = 0; j < column; j++) {
			inner.push([value]);
		}
		matrix.push(inner);
	}
	return matrix;
}

console.log(getMatrix(3, 3, 0));

/*
[
	[0,0,0]
	[0,0,0]
]
*/

function printStar(value) {
	let pattern = '';
	for (let i = 0; i < value; i++) {
		for (let j = 0; j <= i; j++) {
			pattern += '*';
		}
		pattern += '\n';
	}
	console.log(pattern);
}

// printStar(5);

function printSquare(value) {
	let pattern = '';
	for (let i = 0; i < value; i++) {
		for (let j = 0; j < value; j++) {
			pattern += '*';
		}
		pattern += '<br>';
	}
	document.write(pattern);
}

// console.log(printStar(2));

function printNewPattern(value) {
	let pattern = '';
	for (let i = 1; i <= value; i++) {
		for (let j = 1; j <= value; j++) {
			if (i > 1 && i < value && j > 1 && j < value) {
				pattern += ' ';
			} else {
				pattern += '*';
			}
		}
		pattern += '\n';
	}
	// document.write(pattern);
	console.log(pattern);
}

// printNewPattern(4);

function printLastPattern(value) {
	let pattern = '';
	for (let i = 1; i <= value; i++) {
		for (let j = value; j >= 1; j--) {
			if (j <= i) {
				pattern += '*';
			} else {
				pattern += ' ';
			}
		}
		pattern += '\n';
	}
	console.log(pattern);
}

// printLastPattern(4);

function printPattern5(value) {
	let text = '';
	for (let i = 1; i <= value; i++) {
		for (let j = value; j >= i; j--) {
			text += '*';
		}
		text += '\n';
	}
	console.log(text);
}

// printPattern5(10);

function printPattern6(value) {
	let text = '';
	for (let i = 1; i <= value; i++) {
		for (let j = 1; j <= i; j++) {
			if (j > 1 && j < i && i !== value) {
				text += ' ';
			} else {
				text += '*';
			}
		}
		text += '\n';
	}
	console.log(text);
}

printPattern6(5);

// Create a function that concatenates n input arrays, where n is variable.
//     Examples
//     concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
//     concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
//     concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
//     concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

function concateArrays(n) {
	let result = [];
	for (let i = 0; i < arguments.length; i++) {
		for (let j = 0; j < arguments[i].length; j++) {
			result.push(arguments[i][j]);
		}
	}
	return result;
}

// console.log(concateArrays([1, 2, 3], [4, 5], [6, 7]));
// console.log(concateArrays([1], [2], [3], [4], [5], [6], [7]));
// console.log(concateArrays([1, 2], [3, 4]));
// console.log(concateArrays([4, 4, 4, 4, 4]));

/*

Find k numbers with most occurrences in the given array

Given an array of n numbers and a positive integer k. The problem is to find k numbers with most occurrences, i.e., the top k numbers having the maximum frequency. If two numbers have the same frequency then the larger number should be given preference. The numbers should be displayed in decreasing order of their frequencies. It is assumed that the array consists of k numbers with most occurrences.

Examples:

1 ==> 
    Input: 
      arr[] = {3, 1, 4, 4, 5, 2, 6, 1}, 
      k = 2
    
    Output: 4 1
    
    Explanation:
      Frequency of 4 = 2
      Frequency of 1 = 2
      These two have the maximum frequency and 4 is larger than 1.

2 ==>
    Input : 
       arr[] = {7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9},
       k = 4
    
    Output: 5 11 7 10

    Explanation: 
      Frequency of 5 = 3
      Frequency of 11 = 2
      Frequency of 7 = 2
      Frequency of 10 = 1
      These four have the maximum frequency and 5 is largest among rest.

	  */

// 1. loop on array
// 2. check first element with next element that same or not
// 3. if duplicate element found then push it into empty array

function repeatNumber(arr, k) {
	let output = [];
	let result = arr.reduce((acc, curr) => {
		if (acc[curr]) {
			acc[curr] = ++acc[curr];
		} else {
			acc[curr] = 1;
		}
		return acc;
	}, {});
	console.log(result);
	let sortArr = Object.keys(result)
	.sort((a,b) => result[b]-result[a])
	console.log(sortArr);

	for(let i=0; i<k; i++){
		output.push(Number(sortArr[i]))
	}
	return output;
}

function print_N_mostFrequentNumber(arr, k) {
    let mp = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in mp == false){
            mp[arr[i]] = 0;
        }
	        mp[arr[i]] = mp[arr[i]] + 1;
    }

    const map = new Map(Object.entries(mp));
    let queue = [...map];
	// console.log(queue);
    queue.sort(function (a, b) {
        if (a[1] == b[1]) {
            return b[0] - a[0];
        }
        else {
            return b[1] - a[1];
        }
    });
	console.log(queue);

    let result = [];
    for(let i=0;i<k;i++){
        result.push(queue[i][0]);
    }
    return result;
}


console.log(print_N_mostFrequentNumber([7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9], 4));


// console.log(repeatNumber([7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9], 4));
// Output (Should be) : 5 11 7 10

// console.log(repeatNumber([3, 1, 4, 4, 5, 2, 6, 1], 2));
// Output (Should be) : 4 1


/*
 *********
 *******
 *****
 ***
 *
 */
function pattern8(value) {
	let num = value;
	let str = '';
	for (let i = 0; i < value; i++) {
		for (let k = 0; k < i; k++) {
			str += ' ';
		}
		for (let j = 0; j < 2 * (num - i) - 1; j++) {
			str += '*';
		}
		str += '\n';
	}
	return str;
}

// console.log(pattern8(10));

function pattern2(a) {
	let str = '';
	for (let i = 0; i < a; i++) {
		for (let j = 0; j < a; j++) {
			if (i == 0 || i == a - 1 || j == 0 || j == a - 1) {
				str += '*';
			} else {
				str += ' ';
			}
		}
		str += '\n';
	}
	return str;
}

// console.log(pattern2(4));

/*

    *
   ***
  *****
 *******
*********

*/

function pattern7(value) {
	let num = value;
	let str = "";
	for(let i=value; i>0; i--){
		for(let k=0; k<i-1; k++){
			str += " "
		}
		for(let j=0; j<2 * (num-i+1) -1; j++){
			str += "*";
		}
		str += "\n";
	}
	return str;
}

// n=5
// console.log(2 * (n-5+1) -1);
// console.log(2 * (n-4+1) -1);
// console.log(2 * (n-3+1) -1);
// console.log(2 * (n-2+1) -1);
// console.log(2 * (n-1+1) -1);

// console.log(pattern7(5));
/*
    *
   * *
  *   *
 *     *
*********
*/


function pattern9(value) {
	let num = value;
	let str = "";
	for(let i=value; i>0; i--){
		for(let k=0; k<i; k++){
			str += " ";
		}
		for(let j=0; j<2*(num-i+1)-1; j++) {
			if(i == value || i==1 || j==0 || j == 2*(num-i+1)-2){
				str += "*";
			} else {
				str += " ";
			}
		}
		str += "\n";
	}
	return str;
}

// console.log(pattern9(10));

/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
	* 
*/


// Example of Rest Operator
function allTruthy(...other){

	for(let i=0; i<other.length; i++){
		if(other[i]==false){
			return false;
		}
	}
	console.log(other);
	return true;
}
const result = allTruthy(true,true,true,true,2);
console.log(result);



// Example of Spread and Rest Operator
var names1 = ["Anwar","Uzair","Aaliya","Aadil"];

function getNames(...myNames){
	let allNames = "";
	for(let i=0; i<myNames.length; i++){
		allNames += myNames[i]+"\n";
	}
	return allNames;
}

console.log(getNames(...names1));


