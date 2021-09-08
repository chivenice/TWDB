// =====================
// BASIC IF/ELSE
// =====================
let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
} else {
    console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!")
}
console.log(random);

// =====================
// DAYs QUOTEs
// =====================
const dayOfWeek ="Wednesday";
if (dayOfWeek === "Monday") {
    console.log("Start a new week with a smoothie glass!")
}
else if (dayOfWeek ==="Wednesday") {
    console.log("Grab an Uber Snack!")
}
console.log(dayOfWeek);
// =====================
// PROMPT EXAMPLE
// =====================





// =====================
// TICKET PRICE EXAMPLE
// =====================

// 0-5 - FREE
// 5 - 10 CHILD $10 
// 10 - 65 ADULT $20 
// 65+ SENIOR $10
const age = 77;
if ( age<5 ) {
    console.log("You are baby. Get in for free!")
}
else if (age <10 ) {
    console.log("You are child. Your ticket price is $10.")
}
else if (age <65 ) {
    console.log("You are adult. Your ticket price is $20.")
}
else  {
    console.log("You are senior. Your ticket price is $10.")
}

// =====================
// NESTING CONDITIONALS
// =====================
const userInput = "Enter your number"
if (userInput<100){
    if (userInput%2 == 0) {
        console.log("You are cat!")
    }
    else {
        console.log("You are dog!")
    }
}
if (userInput>=90){
    console.log("You are human!")
}

const password = prompt("Please enter your password");

// Password must be 6+ characters
if (password.length>=6){

// CAnnot include space
    if (password.indexOf(' ')=== -1 ){
    console.log("Valid Password!")
}
else {
    console.log("Password cannot contain spaces!")
}}
    else{
        console.log("PASSWORD is TOO SHORT! Must be 6+ characters!");
    }

// CAnnot include space
