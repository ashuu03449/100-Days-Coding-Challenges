//Day 01 Challenge
//Question 01
// Install Node.js, TypeScript and VS Code on your computer.
//yes I Download all installation command and library
//Question 02
var personName = "Ayesha Shakoor";
console.log("Hello", personName, "would you like to learn some Python today?"); //print a message with personName
//Question 03
var studentName = "ayesha Shakoor";
//lowercase
console.log("Lowercase: " + studentName.toLowerCase());
//UPPERCASE
console.log("Uppercase: " + studentName.toUpperCase());
//Title Case
console.log("Titlecase: " + studentName.replace(/\b\w/g, function (abcd) { return abcd.toUpperCase(); }));
