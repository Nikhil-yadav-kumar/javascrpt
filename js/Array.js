/*heap memory store the data but to access the data,
 we need a reference or a pointer that is provid3d by stack.
 
for ex. arr[]=1,2,3
1,2,3 is stored into the heap mnemory and 
var arr[] is stored in stack*/

// const arr=[1,2,3,4,5];

// //array constructor
// let brr = new Array('nikhil',1,true)
// // console.log(arr); 
// // console.log(brr); 

// // console.log(typeof(arr));
// // console.log(typeof(brr));


// arr.push('nikhil');
// console.log(arr);


// let arr=[1,2,3,4,5,"nikhil"];
// // arr.push('nikhil');
// // console.log(arr);
// // arr.pop();
// // console.log(arr);
// // arr.shift();
// // console.log(arr);
// // arr.unshift('nikhil');
// // console.log(arr);
// // console.log(arr.slice(1,4));
// // arr.splice(1,0,'yadav','nikhil');
// console.log(arr);

// let arr=[10,15,20,34,57];

// let ansArray=arr.filter((number)=>{
//     return number%2===0;
//     // if(number%2===0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// })
// console.log(ansArray);
// let arr=[10,15,20];
// let ansArray =arr.map((number) =>{
//     return number*number;
// })
// console.log(ansArray);

// let ansArray=arr.map((number)=>{
//     return number+1;
// })
// console.log(ansArray);

//filter

// let arr=[10,15,20,34,57];
// let ansArray=arr.filter((number)=>{
//     return number%2===0;
//     // if(number%2===0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// })
// console.log(ansArray);

// let arr=[1,3,7,"nikhil",true,'kumar'];
// let Printstring=arr.filter((value)=>{
//     if(typeof(value)==='boolean'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(Printstring);

//reduce
// let arr=[10,20,30,40];

// let sumArray=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0);
// console.log(sumArray);

// //sorting
// let arr=[8,2,7,5,1,3];
// arr.sort();

// console.log(arr);

// //indexof
// let arr=[8,2,7,5,1,3];
// arr.sort();

// console.log(arr);
// console.log(arr.indexOf(7));

// let arr=[8,2,7,5,1,3];

// arr.forEach((value,index)=>{
//     console.log("number:",value,"index:",index);
// })

// //creation of array
// let arr=[1,2,3,4,5];
// console.log(arr); 
// //array constructor
// let brr= new Array('nikhil',1,true);
// console.log(brr[0])

//push is used to insert in right most side
//pop is used to remove in right most side

//shift is used to remove from left most side
//unshift is used to add in left most side

// //slice is used to cut out the part
// let arr=[1,'nik',2,5,'yadav',56,77]
// arr.unshift("nikhil");
// console.log(arr.slice(2,5));
// console.log(arr);

//splice is to remove and add by removing items using index
//like splice(2-starting index,4- no.of items to be removed,nikhil-inserting elemnt)
// let arr=[1,'nik',2,5,'yadav',56,77]
// arr.splice(2,4,67)
// console.log(arr)

//map is used to take input and do process from function and return

// let arr=[10,20,30];
// let ansArray= arr.map((number) =>{
//     return number*number

// })
// console.log(ansArray);

// let arr=[2,3,4]
// let ansArray=arr.map((number)=>{
//     if(number%2==0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// })
// console.log(ansArray)

//filter is used to include or exclude the items

// let arr=[2,3,4]
// let ansArray=arr.filter((number)=>{
//     if(number%2==0){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(ansArray)

// //sorting

// let arr=[23,45,34,78,37]
// arr.sort((a,b)=> b-a);
// console.log(arr)

// let arr=[23,45,34,78,37];
// arr.sort()
// console.log(arr)

