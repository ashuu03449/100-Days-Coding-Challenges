//Day 05 Challenge
//Question 13

//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.


let transportModes = ["Car","Bike","Cycle","Sport","Bus"];

transportModes.forEach(transport => {console.log(`I would like to own a ${transport}.`)});


//Question 14

//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList = ["Hina Naseer","Ameen Alam","Hamzah Syed","Asharib Ali"];

guestList.forEach(guest => {console.log(`Hello ${guest},would you like to dinner with me`)});

//Question 15

//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guestsList = ["Hooria","Mariyum","Fabeeha","Romaisa"];

let notCome = guestsList[0];

console.log(notCome, "can't make it to dinner");//THis not come

guestList.splice(0,1,"Rabia");//Replace the guest
guestList.forEach(guests => console.log(`Hello ${guests},would you like to dinner with me`));
