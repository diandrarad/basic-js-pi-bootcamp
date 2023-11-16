// js basic 1
let nama = "Diandra";  // Assigning the value "Diandra" to the variable 'nama'
let asalDaerah = "Medan";  // Assigning the value "Medan" to the variable 'asalDaerah'
let tglLahir = "1 Oktober 2001";  // Assigning the value "1 Oktober 2001" to the variable 'tglLahir'
let umur = 22;  // Assigning the value 22 to the variable 'umur'
let posisiPekerjaan = "Mahasiswa";  // Assigning the value "Mahasiswa" to the variable 'posisiPekerjaan'

// Printing the values of the variables using console.log
console.log(nama, "\n", asalDaerah, "\n", tglLahir, "\n", umur, "\n", posisiPekerjaan);


// js basic 2
// Prompt the user for username and country
var username = prompt("Please enter your username:");
var country = prompt("Please enter your country of origin:");

// Display a confirmation message
var confirmationMessage = "Username: " + username + "\nCountry: " + country + "\n\nIs the data entered correct?";
var isDataCorrect = confirm(confirmationMessage);

// Check the user's confirmation and show an appropriate alert
if (isDataCorrect) {
    alert("Thank you for filling out the form!");
} else {
    alert("Please refresh the page and provide correct information.");
}


// js basic 5
// Create an object with properties for each piece of information
let dataDiri = {
    nama: nama,
    asalDaerah: asalDaerah,
    tglLahir: tglLahir,
    umur: umur,
    posisiPekerjaan: posisiPekerjaan
};

// Accessing and printing the values from the object
console.log("Nama:", dataDiri.nama);
console.log("Asal Daerah:", dataDiri.asalDaerah);
console.log("Tanggal Lahir:", dataDiri.tglLahir);
console.log("Umur:", dataDiri.umur);
console.log("Posisi Pekerjaan:", dataDiri.posisiPekerjaan);


// js basic 6
let additionResult = 25 + 10;  // Addition: 25 + 10
let divisionResult1 = 100 / 2;  // Division: 100 / 2
let divisionResult2 = 99 / 2;  // Division: 99 / 2
let modulusResult = 99 % 2;  // Modulus (Remainder): 99 % 2

// Printing the results
console.log("Result of 25 + 10:", additionResult);
console.log("Result of 100 / 2:", divisionResult1);
console.log("Result of 99 / 2:", divisionResult2);
console.log("Remainder of 99 divided by 2:", modulusResult);


// js conditional 1
// Assume the role at the startup
let role = "HR";

// Conditional statements based on the role
if (role === "Developer") {
    console.log("As a Developer, your task is to write code and develop software.");
} else if (role === "Designer") {
    console.log("As a Designer, your task is to create visually appealing designs and user interfaces.");
} else if (role === "HR") {
    console.log("As HR, your task is to carry out recruitment for prospective new employees.");
} else {
    console.log("Your role at startup is not defined or recognized.");
}


// js conditional 2
// Assign values to variables a and b
let a = 10;
let b = 5;

// Compare values using a conditional statement
if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is smaller than b");
} else {
    console.log("a is equal to b");
}


// js conditional 3
// Assign a number representing a day (1 for Sunday, 2 for Monday, and so on)
let dayNumber = 3; // For example, assuming 3 represents Wednesday

// Use a switch statement to determine the name of the day
switch (dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
        break;
}


// js conditional 4
// Get user input (for example, UP, RIGHT, DOWN, LEFT)
let userInput = "UP"; // Change this value to test different directions

// Use a switch statement to determine the character's movement based on user input
switch (userInput) {
    case "UP":
        console.log("Character walks up.");
        break;
    case "RIGHT":
        console.log("Character walks to the right.");
        break;
    case "DOWN":
        console.log("Character walks downwards.");
        break;
    case "LEFT":
        console.log("Character walks left.");
        break;
    default:
        console.log("Invalid input. Please enter UP, RIGHT, DOWN, or LEFT.");
        break;
}


// js loop 1
for (let i = 1; i <= 100; i++) {
    console.log(i + "st User");
}


// js loop 2
let initialValue = 0;  // Initialize the initial value

// Use a for loop to repeat addition 10 times
for (let i = 1; i <= 10; i++) {
    // Increase the initial value by 2 for each repetition
    initialValue += 2;

    // Display the addition result for each repetition
    console.log("Result for repetition " + i + ": " + initialValue);
}


// js loop 3
// Use a for loop to iterate from 0 to 20
for (let i = 0; i <= 20; i++) {
    let isEven = i % 2 === 0;  // Check if the value is odd or even

    // Display information for each repetition
    console.log("Value: " + i + " is " + (isEven ? "even" : "odd"));
}


// js loop 4
let count = 0;

// Use a do-while loop to display the confirmation pop-up
do {
    // Display the confirmation pop-up and store the result in the variable 'userChoice'
    let userChoice = confirm('Do you want to repeat');

    // Check the user's choice
    if (userChoice) {
        // If 'OK' is clicked, increment the count
        count++;
    } else {
        // If 'Cancel' is clicked, display the message with the count
        alert('Repetition has been carried out ' + count + ' times.');
    }
} while (userChoice);


// js loop 5
let correctAnswer = "Impact Byte";  // Define the correct answer

// Use a do-while loop to keep prompting until the correct answer is given
do {
    // Prompt the user with the quiz question
    let userAnswer = prompt("Mention what the name IB (Impact Byte) stands for?");

    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
        // Display a congratulatory message if the answer is correct
        alert("Congratulations, your answer is correct!");
    } else {
        // Display a message if the answer is incorrect
        alert("Sorry, your answer is incorrect. Please try again.");
    }
} while (userAnswer !== correctAnswer);
