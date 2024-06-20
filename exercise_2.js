// write a ternary operator to check if a user can vote or not

const Age = prompt("Enter your age: ");

const result =
  Age >= 18
    ? console.log("you are eigible to vote")
    : console.log("you are not eligible to vote");
