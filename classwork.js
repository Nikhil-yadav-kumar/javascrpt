let studentName="Nikhil";// a student can change their name or not depend upon on their need.
const rollNumber=179;// roll number of a student remain ssame during thier whole course 
let sem=5;// semester changes after every 6 months or a fixed  academic session


const teamName ="Cosmic Coders";//team doesnot change.
let currentScore=135;//score changes after every run 
let overs=11;//over changes after 6 balls 




let enteredPin = "1234";
let storedPin = 1234;
console.log(enteredPin == storedPin);   // it will give output "true" bcoz it compare the value only 
console.log(enteredPin === storedPin);  // it will give output "false" bcoz it compare both data type and value 
 
// to use it in banking software
if (enteredPin === String(storedPin)) {
  console.log("Correct PIN");
} else {
  console.log("Invalid PIN");
}





function orderCoffee(size){
    if (size == ' '){
        return 'Medium Coffee';
    }
    else{
        return size;
    }
}
console.log(orderCoffee("Large"));






function total(...amounts) {
  return amounts.reduce((s, n) => s + n, 0);
}
console.log(total(10,20,30)) 




