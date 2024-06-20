//checking wheather a given value is string or not
const value1 = prompt("Enter your value1");
const value2 = prompt("Enter your value2");

const isValidValue1 =
  (value1.charCodeAt() >= 65 && value1.charCodeAt() <= 90) ||
  (value1.charCodeAt() >= 97 && value1.charCodeAt() <= 122);
const isValidValue2 =
  (value2.charCodeAt() >= 65 && value2.charCodeAt() <= 90) ||
  (value2.charCodeAt() >= 97 && value2.charCodeAt() <= 122);

if (isValidValue1 || isValidValue2) {
  alert("Invalid Number");
}
// console.log(value.charCodeAt());
// console.log(typeof value);

// if (typeof value == "string") console.log("it is a string");
// else console.log("others");

// if (isNaN(value))
//   alert("Invalid number");
// }

// edge cases is important
