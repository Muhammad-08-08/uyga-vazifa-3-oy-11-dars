//? 1-misol

// function carinfo(name, year, city) {
//   return {
//     name,
//     year,
//     city,
//     cardrive() {
//       console.log(`moshinaning nomi ${name} yili ${year} davlati ${city}`);
//     },
//   };
// }

// let car = carinfo('nexia', '2020',"O'zbekiston")

// car.cardrive()

//? 1-misol tugadi

//? 2-misol

// function ord(a) {
//   console.log(a() + 16);
// }

// ord(() => 100);

// function highOrder() {
//   return function () {
//     console.log(55);
//   };
// }
// function call(a) {
//   return a();
// }
// console.log(call(() => 123 + 102));

//? 2-misol tugadi

//? 3-misol

// function date1() {
//   let date = new Date();
//   console.log(`hozirgi sana ${date}`);
// }
// date1();

//? 3-misol tugadi

//? 4-misol

// function Sonlar1(sonlar) {
//     return sonlar.filter((son) => son > 3);
//   }

//   let sonlar2 = [1, 2, 3, 4, 5, 6];

//   let natija =  Sonlar1(sonlar2);

//   console.log(natija);

//? 4-misol tugadi

//? 5-misol

// let person = {
//   firstname: "John",
//   lastname: "Doe",
// };
// function getfulname(person) {
//   return (`${person.firstname} ${person.lastname}`);
// }

// let bir = getfulname(person);

// console.log(bir);

// ? 5-misol tugadi

// ? 6-misol

// let person = {
//   firstname: "John",
//   lastname: "Doe",
// };
// console.log(person.firstname.ceo?.lastname);

// ? 6-misol tugadi

// ? 7-misol

// let calculator = {
//     add: function (a, b) {
//         return a + b;
//     },

//     subtract: function (a, b) {
//         return a - b;
//     }
// };

// console.log(calculator.add(5, 3));
// console.log(calculator.subtract(10, 4));