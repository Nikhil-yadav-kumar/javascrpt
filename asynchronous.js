// console.log("program Started");
// console.log("loading");
// console.log("program ended");



// console.log("start");
//   setTimeout(() => {
//     console.log("Hello ");
//   }, 3000);
// console.log("end");




// setTimeout(() => {
//   console.log("Hello");
// },1000);
// setTimeout(()=>{
//     console.log("HELLOOO ")
// },2000);

// setTimeout(()=>{
//     console.log("hii Nikhil")
// },4000);
// console.log("hii");




console.log("Before");
setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000);
console.log("after");



function greet(name,callback){
    console.log("hello " + name)
    callback();
}
function sayBye(){
    console.log("good bye")
}
greet("Nikhil",sayBye)



function Calculate(a,b,callback){
    let sum= a+b;
    callback(sum);
}
function Add(sum){
    console.log("sum is: "+ sum)

}

Calculate(5,10,Add)