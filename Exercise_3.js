//js function to compare and find common items in 2 array
let a = ["paasta", "pizza", "Ice-cream"];
let b = ["Ice-cream", "paasta", "momo"];
// let arr1 = [1, 2, 3, 5, 4, 8, 6, 9];
// let arr2 = [2, 8, 5, 6, 9, 7, 3];

// // hard code
// const check = (a, b) => {
//   const common = [];
//   for (let i = 0; i <= a.length - 1; i++) {
//     //console.log(a[i]);
//     for (let j = 0; j <= b.length - 1; j++) {
//       //console.log(b[j]);
//       if (a[i] === b[j]) {
//         common.push(b[j]);
//       }
//     }
//   }
//   return common;
// };
// console.log(check(arr1, arr2));

// using arry methods
const itemFinder = (arr1, arr2) => {
  const common = arr1.filter((items) => arr2.includes(items));
  return common;
};

console.log(itemFinder(a, b));
