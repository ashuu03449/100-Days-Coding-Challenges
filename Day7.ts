//Question 19

/* Dinner Guests: Working with one of the programs from Exercises 14 through18,
print a message indicating the number of people you are inviting to dinner.
*/
//Start Program exercise 14

let guesttList = ["Ameen Alam", "Hina Naseer", "Emaan", "Ayesha", "Hafsa"];

// guestList.forEach(inviteGuest => console.log(`Hello Dear ${inviteGuest}, you are invited to dinner plz join us.`));

let lengthGuests: number = guesttList.length;

console.log(`We are Inviting total ${lengthGuests} guests.`);

/*Question 20: Think of something you could store in an array. For example, you could make a list of mountains,
rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.*/

let countries: string[] = ["North Korea","Malaysia","Japan","Germany","France"]
console.log("Countries I'd like to visit: ", countries);

//Question 21
interface programmingCourse {
    name : string
    location : string
    onsiteStudents : number
}

let ProgrammingCourse:programmingCourse = {
    name : "Typescript & Javascript",
    location : "Governor Sindh",
    onsiteStudents : 50000
};

console.log(ProgrammingCourse);
