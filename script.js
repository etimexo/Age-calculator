// // Prompt the user to enter their birthdate
// const birthdate = prompt('Enter your birthdate (YYYY-MM-DD):');

// // Create a Date object for the current date
// const currentDate = new Date();

// // Extract the year, month, and day from the current date
// const currentYear = currentDate.getFullYear();
// const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
// const currentDay = currentDate.getDate();

// // Extract the year, month, and day from the birthdate
// const birthYear = parseInt(birthdate.substring(0, 4));
// const birthMonth = parseInt(birthdate.substring(5, 7));
// const birthDay = parseInt(birthdate.substring(8, 10));

// // Calculate the age
// let age = currentYear - birthYear;

// // Adjust the age if the current month and day are before the birth month and day
// if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
//   age--;
// }

// // Display the current year, month, and day
// console.log('Current Year:', currentYear);
// console.log('Current Month:', currentMonth);
// console.log('Current Day:', currentDay);

// // Display the birthdate entered by the user
// console.log('Birthdate:', birthdate);

// // Display the calculated age
// console.log('Age:', age);
