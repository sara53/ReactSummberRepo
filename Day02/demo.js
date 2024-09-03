// var fname = "ali";
// let myKey = "age";
// let person = {
// 	fname, // fname:fname
// 	[myKey]: 20,
// 	display() {
// 		console.log("Display");
// 	},
// };

// person.display();
// // console.log(person);

// let person = {
// 	fname: "Ali",
// 	age: 20,
// 	color: "red",
// };

// // let result = Object.keys(person);
// // let result = Object.values(person);
// let result = Object.entries(person);
// console.log(result);

// function first() {
// 	console.log("First");
// 	second();
// 	console.log("End");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("Second");
// 	}, 2000);
// 	console.log("After setTimeout");
// }
// first();

// setTimeout(() => {
// 	console.log("First");
// }, 0);

// console.log("Second");

// console.log("End");

// setTimeout(() => {
// 	console.log("First");
// }, 2000);
// setTimeout(() => {
// 	console.log("Second");
// }, 1000);

// console.log("End");

// var x;

// setTimeout(() => {
// 	x = 10;
// 	console.log(x);
// }, 2000);
/**---------------- */

// var products;

// setTimeout(() => {
// 	products = [
// 		{
// 			id: 1,
// 			name: "Book",
// 			price: 200,
// 		},
// 		{
// 			id: 2,
// 			name: "pen",
// 			price: 300,
// 		},
// 	];

// 	setTimeout(() => {
// 		var product = products.find((product) => product.id == 1);
// 		setTimeout(() => {
// 			var price = product.price;
// 			console.log(price);
// 		}, 500);
// 	}, 2000);
// }, 3000);

// function greet(myFun) {
// 	myFun(
// 		function () {
// 			console.log("cb1");
// 		},
// 		function () {
// 			console.log("Cb2");
// 		}
// 	);
// }

// greet(function (x, y) {
// 	x();
// 	y();
// });

// var myPromise = new Promise(function (x, y) {
// 	//x([100, 200, 400]);
// 	y("custom error message");
// });

// myPromise
// 	.then(function (data) {
// 		console.log(data);
// 		console.log("from Then");
// 	})
// 	.catch(function (data) {
// 		console.log(data);
// 	});

/**
 *
 *  == pending
 *  == fulfilled
 *  == rejected
 *
 */

// function getAllProducts() {
// 	var myPromise = new Promise(function (x, y) {
// 		var products;
// 		setTimeout(() => {
// 			products = [
// 				{
// 					id: 1,
// 					name: "Book",
// 					price: 200,
// 				},
// 				{
// 					id: 2,
// 					name: "pen",
// 					price: 300,
// 				},
// 			];

// 			if (products) {
// 				x(products);
// 			} else {
// 				y("Error on getting products List");
// 			}
// 		}, 3000);
// 	});

// 	return myPromise;
// }

// function getProduct(products, productId) {
// 	var myPromise = new Promise(function (x, y) {
// 		var product = products.find((product) => product.id == productId);
// 		if (product) {
// 			x(product);
// 		} else {
// 			y("Error on getting Product id");
// 		}
// 	});

// 	return myPromise;
// }

// // getAllProducts()
// // 	.then((productsList) => {
// // 		return getProduct(productsList, 2);
// // 	})
// // 	.then((product) => {
// // 		console.log(product);
// // 	})
// // 	.catch((error) => {
// // 		console.log(error);
// // 	});

// // async function execute() {
// // 	try {
// // 		let products = await getAllProducts();
// // 		let response = await getProduct(products, 7);
// // 		console.log(response);
// // 	} catch (error) {
// // 		console.log(error);
// // 	}
// // }

// // execute();

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		for (let i = 0; i < data.length; i++) {
// 			document.write(
// 				`<h${i + 1}>${data[i].name} : ${data[i].email}</h${i + 1}>`
// 			);
// 		}
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function execute() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();

// let product1 = {
// 	id: 1,
// 	name: "Book",
// };

// let product2 = {
// 	id: 2,
// 	name: "Pen",
// 	cat: "school",
// };

// class Product {
// 	#price;
// 	constructor(id, name, price) {
// 		this.id = id;
// 		this.name = name;
// 		this.#price = price;
// 	}

// 	discount() {
// 		return this.#price * 0.5;
// 	}

// 	get price() {
// 		return this.#price;
// 	}
// 	set price(value) {
// 		this.#price = value;
// 	}
// }

// let product1 = new Product(1, "Book", 300);
// product1.price = 400;
// console.log(product1.price);
// product1.setPrice = 400;
// console.log(product1.getPrice);

// product1.setPrice();
// let product2 = new Product(2, "Pen", 200);

// console.log(product1.name); // get
// product1.name = "PEn"; // set
// console.log(product2.discount());

// super class - parent class
// class Person {
// 	constructor(id, name, age) {
// 		if (this.constructor == Person) {
// 			throw "can't take an object from abstract class";
// 		}
// 		this.id = id;
// 		this.name = name;
// 		this.age = age;
// 	}
// 	display() {
// 		throw "Method is not implemented";
// 	}
// }

// let person1 = new Person(1, 3);

// subClass -- child Class
// class User extends Person {
// 	constructor(id, name, age, password) {
// 		super(id, name, age);
// 		this.password = password;
// 	}

// 	generatePassword() {
// 		return this.password.toUpperCase() + "@$";
// 	}

// 	// override
// 	display() {
// 		console.log(`name:${this.name} , password:${this.password}`);
// 	}
// }

// let myUser = new User(1, "ali", 20, "aliAHMED");
// myUser.display();

// console.log(myUser.generatePassword());
// import test, { add, square } from "./main.js";

// import * as all from "./main.js";

// function multi() {
// 	return all.add(3, 5) + all.square(2);
// }

// console.log(multi());
// all.default();

// console.log(all.trackName);
/** Lab
 *  == Get All Users Task
 *  == Shape Task
 *
 *
 */
