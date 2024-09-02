/**
 * var
 * == reassign
 * == can be redeclare
 * == can be Hoisting
 * == added to window object
 * == function scope
 * --------------------------------
 * == let
 * ----------------
 * == reassign
 * == can't be redeclare
 * == can't be hoisted
 * == not added to window object
 * == block scope
 * * --------------------------------
 * == const
 * ----------------
 * == can't reassign
 * == can't be redeclare
 * == can't be hoisted
 * == not added to window object
 * == block scope
 * * --------------------------------
 */

// const arr = [10, 20];

// console.log(arr);

// const PI = 3.14;

// console.log(PI);
// let fname = "mona";
// // console.log(fname);
// // console.log(window.fname);
// function showData() {
// 	let test = "react";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 		console.log(test);
// 	}
// 	console.log(test);
// 	// console.log("i outside loop is : ", i);
// }

// showData();

// var a = 4;
// var b = a;

// a = 5;

// console.log("-----------------");

// console.log("a : ", a);
// console.log("b : ", b);
// console.log("-----Spread Operator------------");

// var arr1 = [10, 20, 30, 90, 3, 50];

// console.log(Math.max(...arr1));

// var arr2 = [1, 2, 3, ...arr1, "ITI", "Os", "PD"];

// for (let i = 0; i < arr1.length; i++) {
// 	arr2[i] = arr1[i];
// }
// arr1.push("mona");
// arr2.push(true);

// console.log("arr1: ", arr1);
// console.log("arr2: ", arr2);

// let person1 = {
// 	fname: "ali",
// 	age: 20,
// };

// let person2 = { ...person1, color: "red" };

// console.log("person1 : ", person1);
// console.log("person2 : ", person2);
// default Value
// function showData(fname = "default name", age = 1) {
// 	console.log(fname, age);
// }

// showData();
/**------------Rest Params---------------- */
// function showData(...rest) {
// 	console.log(rest);
// }

// showData("ali", 20, true, 10, "alaa");
/** destructing */

// let [, , z] = [10, 20, "mona"];

// // let x = arr[0];
// // let y = arr[1];

// console.log("z : ", z);

// function getArr(data) {
// 	return [data, 20, 40, 60];
// }

// let [x, y] = getArr("PD");

// console.log(x);
// console.log(y);
/** */
// let person = {
// 	fname: "ali",
// 	age: 20,
// 	color: "red",
// 	products: [10, 300, 500],
// };

// // let { fname: fname, color: color } = person;
// let {
// 	fname,
// 	color,
// 	products: [x, y],
// } = person;

// console.log(fname);
// console.log(color);

// console.log(x);
/**--------------
 * == startsWith
 * == endsWith
 * == includes
 * == concat
 * == trim
 * == trimStart
 * == trimEnd
 *
 * ---------------- */
// var fname = "Ali";
// let lname = "ahmed";
// console.log(fname + " " + lname + "h");
// console.log(`${fname} ${lname} hello at ITI`);

// console.log(fname.trimEnd() + ":)");
/**
 * Functions
 *  -- built in functions
 *  -- User Defined Functions
 *      -- function expression
 *      -- function statement (declaration)
 *
 */

// console.log(sum(10, 20));
// // function statement
// function sum(x, y) {
// 	return x + y;
// }

// console.log(add(40, 50));

// // function expression
// let add = function (x, y) {
// 	return x + y;
// };

// arrow function
// let add = (x, y) => {
// 	console.log("Welcome add");
// 	return x + y;
// };

// let sayHello = () => console.log("Hello");

// let square = (x) => x * x;

// let result = square(5);
// console.log(result);

// let result = add(40, 50);
// console.log(result);
/**======================= */

// var fname = "ali";

// function getFname() {
// 	// this--window
// 	console.log(this.fname);
// }

// getFname();
// window

// var fname = "ahmed";
// let person = {
// 	fname: "mona",
// 	display: () => {
// 		window.setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();
/**----------
 * find
 * findIndex
 * map
 * every
 * some
 * filter
 * forEach
 * -------- */

// let arr = [10, 20, 13, 40, 80];
// let itiTracks = ["Os", "SD", "Social"];
// for (let i = 0; i < itiTracks.length; i++) {
// 	console.log(`${itiTracks[i]} at ITI`);
// }
// console.log("================");

// itiTracks.forEach((item, index) => {
// 	console.log(`${item} at ITI`);
// });
// itiTracks.forEach((item, index) => {
// 	console.log(` ${item} `);
// });
// let result = itiTracks.some(function (item, index) {
// 	return item.startsWith("S");
// });

// console.log(result);

// let result = itiTracks.map(function (item, index) {
// 	return {
// 		id: index,
// 		trackName: item,
// 	};
// });

// console.log(result);

// let result = itiTrack.findIndex((item) => item.startsWith("S"));

// console.log(result);

// function findElement(value, index, arr) {
// 	console.log("value :", value);
// 	console.log("index :", index);
// 	console.log("arr :", arr);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) return arr[i];
// 	}
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("------------------");
// }

// let products = [
// 	{
// 		id: 1,
// 		name: "Book",
// 		cat: "school",
// 	},
// 	{
// 		id: 2,
// 		name: "Pen",
// 		cat: "school",
// 	},
// 	{
// 		id: 3,
// 		name: "phone",
// 		cat: "electronics",
// 	},
// ];

// let result = products.filter(function (item, index) {
// 	return false;
// });

// console.log(result);

// [10,30,-3,-2,11,20] == [10,30,11,20]
// reduce [10,20,30] ==> 60
//["ali",'ahmed','mona'] ==['Ali','Ahmed','Mona']
//[ola,mona,ali,"Hoda",Salma] , 3
// [mona,hoda,salma]

// hello From iti --> not lower case
// javascript

// Hello -->
