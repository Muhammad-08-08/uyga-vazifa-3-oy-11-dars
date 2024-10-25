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

// ? 2-misol

// function ord(ordernumber, callback){
//     callback(ordernumber);
// }
// ord(444, (num) => {
//     console.log(`qayta ishlangan order  ${num}`);

// })

// ? 2-misol tugadi

// ? 3-misol

// (function () {
//   let date = new Date();
//   console.log(
//     `hozirgi kun ${date.getDate()}, oy ${
//       date.getMonth() + 1
//     }, yil ${date.getFullYear()},`,
//     `vaqt  soat ${date.getHours()},  minut ${date.getMinutes()},  sekund ${date.getSeconds()}`
//   );
// })();

// ? 3-misol tugadi

// ? 4-misol

// function filteritems(arr, arr1) {
//   return arr.filter(arr1);
// }
// let Numbers = [1,2,3,4,5,6];
// console.log(filteritems(Numbers, (n) => n > 3));

// ? 4-misol tugadi

// ? 5-misol

// let person ={
//     firstnames: 'John',
//     lastnames: 'Doe',
//     birlash(){
//         return `${this.firstnames} ${this.lastnames}`
//     },
// }
// console.log(person.birlash());

// ? 5-misol tugadi

// ? 6-misol

let company = {
    name: 'teach corp',
    location: 'San Fransisko',
    ceo: {name: 'Jane Doe'},
}
console.log(company?.name?.location?.ceo?.job);


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
