// //function definition
// function CallName(){
//     console.log("Nikhil")
// }
// // function use - Function call
// CallName();


// function PrintCount(n){
//     for(let i=1;i<=n;i++){
//         console.log(i);
//     }
// }
// PrintCount(10); 

// //return functions
// function GetAverage(num1,num2){
//     aver=(num1+num2)/2;
//     return aver;
// }

// let ans=GetAverage(7,9);
// console.log("answer:",ans) 

// function GetMyName(FirstName,Lastname){
//     let FullName=FirstName+" "+Lastname;
//     return FullName;
// }
// let Ans=GetMyName("Nikhil","Kumar");

// console.log(Ans);

// let  getmultiplication=function(a,b){
//     return a*b;
// }
// let ans=getmultiplication(5,6);
// console.log(ans);

//Arrowfunctions
// let  getmultiplication=(a,b)=>{
//     return a*b;
// }
// let ans=getmultiplication(5,6);
// console.log(ans);


// function greet(){
//     console.log("Hello World");
// }
// greet();

// function greet(name){  //parameter
//     console.log("hello",name);
// }
// greet('nikhil');//Arguement
 

// function sum(a,b){
//     let ans =a+b;
//     console.log(ans);
// }
// sum(6,7);

// function even(){

//     for(let num=1;num<=100;num++){
//     if(num%2===0){
//         console.log(num,"is even")
//     }
//     else{
//         console.log(num,"is odd")
//     }
// }
// }
// even();

// function even(num){
//     if(num%2===0){
//         console.log(num,"is even")
//     }
//     else{
//         console.log(num,"is odd")
//     }
// }
// let num=87;
// for(let i=1;i<=num;i++){
//     even(i);
// }



// function sum(a,b){
//     return a+b;   
// }
// let ans=sum(6,8);
// console.log("answer is",ans);

// function sum(a,b){
//     return a+b; 
// }
// let ans=sum(6,8);
// console.log("answer is",ans);





// function even(num){     
//     if(num%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let num=87;
// for(let i=1;i<=num;i++){
//     even(i);
//     if(even(i)==true){
//         console.log(i,"is even")
//     }
//     else{
//         console.log(i,"is odd")
//     }
// }
// // for (let i = 1; i < 6; i++) {
// //     console.log(even(i))
// // }

// function loop(){
//     for(let i=1;i<10;i++){
//         console.log(i);
//     }
// }
// loop();

// const name='nikhil';
// const age=16;
// console.log(`hello ${name}, Age:${age}`);



// const calc = (a,b,sym) => {
//     if(sym=='+'){
//         return a+b;
//     }
//     else if(sym=='-'){
//         return a-b;
//     }
//     else if(sym=='*'){
//         return a*b;
//     }
//     else if(sym=='/'){
//         return a/b;
//     }
//     else{
//         return false;
//     }
// };
// let ans=calc(5,6,'*');
// console.log(ans);

let num1=6;

if(num1 % 2){
    console.log(num1);
}
