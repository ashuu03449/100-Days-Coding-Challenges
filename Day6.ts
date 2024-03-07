//Day_06 Challenge

//Question 16
//create a Guest List Array
let guestLiist = ["Ayesha","Usman","Fareeha","Hafsa"];

// Making variable for those guest who cant come
let dontComee = guestLiist[0];

//Print the name of guest who cant come
console.log(dontComee,"not come in dinner");

//Add or remove Values from guest list array
guestLiist.splice(0,1,"Sir Ameen");

//Message Print for Bigger Table
console.log("Good News ! We have found a Bigger Table for dinner");

//Adding a new guest at starting index of array
guestLiist.unshift("Zunaira");

//Adding a new guest at ending index of array
guestLiist.push("Mariyum");

//Making a variable for storing a middle Index of our guest list array
let middleIndex:number = Math.floor(guestLiist.length / 2);

//Adding a new value at middle index of array
guestLiist.splice(middleIndex, 0, "Emaan");

//Print Message of Updated List
console.log("Updated List of our Guest");

// Sending a invitation message to our guests one by one with their names
guestLiist.forEach(oneGuest => console.log(`Hello ${oneGuest}, you would like to dinner with me`));

//Question17

//Start program from Question  16

//create a Guest List Array
let guetList = ["Ayesha","Usman","Fareeha","Hafsa"];

// Making variable for those guest who cant come
let dontCome = guetList[0];

//Print the name of guest who cant come
console.log(dontCome,"not come in dinner");

//Add or remove Values from guest list array
guetList.splice(0,1,"Sir Ameen");

//Message Print for Bigger Table
console.log("Good News ! We have found a Bigger Table for dinner");

//Adding a new guest at starting index of array
guetList.unshift("Zunaira");

//Adding a new guest at ending index of array
guetList.push("Mariyum");

//Making a variable for storing a middle Index of our guest list array
let middleInde:number = Math.floor(guestLiist.length / 2);

//Adding a new value at middle index of array
guetList.splice(middleInde, 0, "Emaan");

//Print Message of Updated List
console.log("Updated List of our Guest");

// Sending a invitation message to our guests one by one with their names
guetList.forEach(oneGuest => console.log(`Hello ${oneGuest}, you would like to dinner with me`));

//Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guest to dinner with me");

// USING WHILE LOOP TO REMOVE GUEST FROM THE ARRAY UNTIL ONLY TWO NAMES REMAIN
while(guetList.length > 2){
    let removeGuest = guetList.pop();
    console.log(`Sorry, ${removeGuest} I can't invite you to dinner`);
}

//Sending a Invitation  to the last two guest in the list
console.log("Invitations to the last 2 Guests");

guetList.forEach(lasttwo => console.log(`Lucky Guest ${lasttwo}, you are still invited to dinner `))

//Removing last two Guest from the list
guetList.pop();
guetList.pop();

console.log("Empty List :",guetList);

//Question 18
//Making a Array of Countries and print its Original Order
let countriesToVisit: string[] = ["Dubai","Australia","China","Paris"];
console.log("Original Order :",countriesToVisit);

//Print the array in Alphabetical Order without modifying the actual Array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//Show that your array is still in its Original Order
console.log("Still in Original Order:", countriesToVisit);

//Print the array in Reverse Order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

//Show that your array is still in its Original Order
console.log("Still in Original Order:", countriesToVisit);

//We have Change the original array Order Now
console.log("Original Array Reverse:", countriesToVisit.reverse());

// print the array to show that it's back to Original Order
console.log("Back to Original Order:", countriesToVisit.reverse());

//Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

//We have Change again the original Array order NOW in reverse order again
console.log("Original Array Reverse Again", countriesToVisit.reverse());