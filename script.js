//Задание 1

// const numbers = {
//   keyin1: 1,
//   keyin2: 2,
//   keyin3: 3,
//   keyin4: 4,
//   keyin5: 5,
//   keyin6: 6,
//   keyin7: 7,
// };

// for (const key in numbers) {
//   if (numbers[key] >= 3) {
//     console.log(numbers[key]);
//   }
// }

//Задание 2
// const post = {
// author: "John", // вывести этот текст
// postId: 23,
// comments: [
// {
// userId: 10,
// userName: "Alex",
// text: "lorem ipsum",
// rating: {
// likes: 10,
// dislikes: 2, // вывести это число
// },
// },
// {
// userId: 5, // вывести это число
// userName: "Jane",
// text: "lorem ipsum 2", // вывести этот текст
// rating: {
// likes: 3,
// dislikes: 1,
// },
// },
// ],
// };


// post.comments.forEach((comment) => {
//   for (const prop in comment) {
//     const value = comment[prop];
//     if (typeof value !== "object") {
//       console.log(prop + ":", value);
//     }
//   }
  
// });

//Задание 3
// const products = [
//   {
//     id: 3,
//     price: 200,
//   },
//   {
//     id: 4,
//     price: 900,
//   },
//   {
//     id: 1,
//     price: 1000,
//   },
// ];

// products.forEach((product) => {
//   product.price = product.price * 0.85;
// });

// products.forEach((product) => {
//   console.log(`Prod: ${product.id}, Price: ${product.price}`);
// });

//Задание 4

// const products = [
//   {
//     id: 3,
//     price: 127,
//     photos: ["1.jpg", "2.jpg"],
//   },
//   {
//     id: 5,
//     price: 499,
//     photos: [],
//   },
//   {
//     id: 10,
//     price: 26,
//     photos: ["3.jpg"],
//   },
//   {
//     id: 8,
//     price: 78,
//   },
// ];

// const productsWithPhotos = products.filter((product) => product.photos > 0);
// console.log(productsWithPhotos);

// products.sort((a, b) => a.price - b.price);
// console.log(products);

//Задание 5

const en   = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const merged = en.reduce((acc, curr, index) => {
  acc[curr] = ru[index];
  return acc;
}, {});
console.log(merged);
