// alert("Hello Code Tubes");
// console.log("Hello code Tubes");
// console.warn("This is warning");
// console.error("This is error");

// console.log(5 + 10);
// console.log(5 * 10);

//Working with strings
// console.log("Hello Word");
// console.log("Hello Word" + "From Arman"); // erku stringner gumarum e irar ev stexcum mi naaxadasutyun
// console.log("Hello Word".toUpperCase()); // bolor tarer mecatar
// console.log("Hello Word".toLowerCase()); // bolor tarer poqratar
//
// let myNumber1 = 5;
// let myNumber2 = 6;
// myNumber2 = 8;
// console.log(myNumber1 + myNumber2);
// const theYear = 2018;
// console.log(theYear);
//  let myName = "Arman";
//  let myCountry = "Armenia"
//
//  let myText = `My name is ${myName} and I'm from ${myCountry}`;   // ` ` ${} karoxenq texti mej avelacnel mer
//           // console.log("Hello Word" + "From Arman");            // tvac popoxakaner aranc gumarman nshani
//                                                                   // poxarinum e ays kodin
//  console.log(myText);

//Working with Booleans
// let myBool1 = true;
// let myBol2 = false;
// let isLogedIn = false;
// console.log(5<6);

//Working with Nulls
// let myNull = null;
// let myNumber = 15;
// let myText = "Some Text here";
// let myBool = true;
// console.log(typeof(myText));

//Working with Arrays
// let countries = ["Armenia","China","Russia","USA","France","Germany"];
// console.log(countries);
// console.log(countries[2]);
// countries[2] ="Armenia";
// console.log(countries[2]);
// countries.push("Georgia");
// console.log(countries);
// countries.unshift("Spain");
// console.log(countries);
// let lastElement = countries.pop();
// console.log(lastElement);
// console.log(countries);
// console.log(countries.indexOf("France"));
// console.log(countries.length);
//
// let people = [
//   ["Andrew","John","Jacob","Rob"],
//   ["Juline","Nicole","Jane","Monica"]
// ];
// console.log(people[0]);
// console.log(people[1]);
// let fullArray = people[0].concat(people[1]);
// console.log(fullArray)
//
// let years  = [2018,2019,2020,2021,2022,2023];
// console.log(years);
//
// let mixedArray = ["Arman",2023,true,null,"Ando"];
// console.log(mixedArray);

//Working with dictionaries key value
// let companies = {
//   microsoft: 1950,
//   ibm: 1965,
//   google: 1985,
//   amazon: [2002, "Jeff Bexos", "USA"],
//   facebook: {
//     year: 2005,
//     owner: "Mark Zuckerberg",
//     country: "USA",
//   }
// }
// console.log(companies);
// console.log(companies.microsoft);
// console.log(companies.facebook.owner);
// console.log(companies.amazon[2]);
// companies.google = 1988;
// console.log(companies);

// Working with Loops cikl
// let countries = ["Armenia", "China", "Russia", "USA", "France", "Germany"];
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i]);
// }
// for (const country of countries) {
//   console.log(country);
// }
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// Working with if else statements
// if (5 > 6) {
//   console.log("Correct");
// } else {
//   console.log("Wrong");
// }
// let i = 0;
// while (i <= 10) {
//   if (i == 5) {
//     i++;
//     continue;
//   } else {
//     console.log(i);
//     i++;
//   }
// }
// let i = 0;
// while (i <= 10) {
//   if (i == 3) {
//     i++;
//     break;
//   } else {
//     console.log(i);
//     i++;
//   }
// }
// let i = 0;
// while (i <= 10) {
//   if (i == 5) {
//     i++;
//     continue;
//   } else if (i == 8) {
//     console.log("The value is 8");
//     i++;
//   } else {
//     console.log(i);
//     i++;
//   }
// }
// let i = 0;
// while (i <= 10) {
//   if (i == 5 || i == 3) {
//     console.log("The value is 3 or 5");
//   } else {
//     console.log(i);
//   }
//   i++;
// }
// let i = 0;
// while (i <= 10) {
//   if (i > 3 && i < 8) {
//     console.log("The value is greater 3 and less 8");
//   } else {
//     console.log(i);
//   }
//   i++;
// }
// let i = 0;
// while (i <= 10) {
//   if ((i > 3 && i < 8) && i == 5) {
//     console.log("The value is greater 3 and less 8");
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// Working with switch case operations
// console.log("For home page press 1");
// console.log("For contact page press 2");
// console.log("For menu page press 3");
// console.log("========================");
//
// let myOption = 1;
// switch (myOption){
//   case 1:
//     console.log("Go to Home Page");
//     break;
//   case 2:
//     console.log("Got to Contact Page");
//     break;
//   case 3:
//     console.log("Go to menu Page");
//     break;
//   default:
//     console.log("Wrong Option");
// }

// Working with Functions
//say_hello
// function say_hello() {
//   console.log("Hello Code Tubes");
// }
// say_hello();
// //say_hello1
// function say_hello1(name) {
//   console.log("Hello " + name);
// }
// say_hello1("Aram");
// //say_hello2
// function say_hello2(name, country) {
//   console.log("My name is " + name + " and I`m from " + country);
// }
// say_hello2("Aram", "Armenia");
// // addNumbers
// function addNumbers(numberOne, numberTwo) {
//   return numberOne + numberTwo
// }
// let total = addNumbers(10, 25);
// console.log(total);
// //addNumbersDefault
// function addNumbersDefault(numberOne=10, numberTwo=25) {
//   return numberOne + numberTwo
// }
// let totalDefault = addNumbersDefault(10);
// console.log(totalDefault);

// Working With Object
// class Account {
//
//   constructor(firstName, lastName, email, password) {
//     this.first_name = firstName;
//     this.last_name = lastName;
//     this._firstName = firstName;
//     this._lastName = lastName;
//     this._email = email;
//     this._password = password;
//   }
//
//   get fullName() {
//     return this.first_name + "_" + this.last_name;
//   }
//
//   get firstName() {
//     return this._firstName;
//   }
//
//   get lastName() {
//     return this._lastName;
//   }
//
//   get email() {
//     return this._email;
//   }
//
//   get password() {
//     return this._password;
//   }
//
//   getInfo() {
//     console.log(`
//     First Name is ${this.first_name}\n
//     Last Name is ${this.last_name}\n
//     Email is ${this.email}\n
//
//     `)
//   }
// }
//
// let account1 = new Account("Aram", "Avetisyan", "aram@maile.ru", "password1");
// console.log(account1);
// console.log(account1.last_name);
// console.log(account1.fullName);
// account1.getInfo();
// let account2 = new Account("John","Smith","john@mail.ru","password2");
// account2.getInfo();

// Working with try catch blocks
// let personName ="John";
// try {
//   console.log(personName)
// } catch (e) {
//   if (e instanceof TypeError) {
//     console.log("Type Error ...");
//   } else if (e instanceof ReferenceError) {
//     console.log("This is a Reference Error......");
//   } else {
//     console.log(e);
//   }
// } finally {
//   console.log("execute this part");
// }
// console.log("Continue .....")

