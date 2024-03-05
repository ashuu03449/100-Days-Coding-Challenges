"use strict";
//Day 04 Challenge
//Question 10
// Two Types of comments 
// Single Line Comment
/* Multiple  Line
     Comment*/
//Program One
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
console.log(5 + 3); //Addition
console.log(16 - 8); //Substraction
console.log(2 * 4); //Multiplication
console.log(16 / 2 + "\n\n"); //Division
//Program Two
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("-".repeat(50));
console.log(16 - 8); //Substraction
console.log("-".repeat(50));
console.log(2 * 4); //Multiplication
console.log("-".repeat(50));
console.log(16 / 2 + "\n\n"); //Division
//Question 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friendNames = ["Areeha", "Nirmal", "Hina", "Emaan"];
console.log(friendNames[0]);
console.log(friendNames[1]);
console.log(friendNames[2]);
console.log(friendNames[3]);
//Question 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let FriendName = ["Areeha", "Nirmal", "Hina", "Emaan"];
for (let FriendNames of FriendName) {
    console.log(`Good Morning ${FriendNames}, hope you are having a fantastic day!`);
}
