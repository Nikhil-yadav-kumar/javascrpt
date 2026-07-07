// console.log(this)

// const user ={
//     name:"Nikhil",
//     greet(){
//         console.log(this.name)
//     }
// }
// user.greet();



// function greet(){
//     console.log(this);
// }
// greet()


// const user={
//     name :"Nikhil",
//     greet(){
//         const sayHi =()=>{
//             console.log(this.name);
//         }
//         sayHi();
//     }

// };
// user.greet();




// const student = {
//   name: "Nikhil",
//   age: 20,
//   college: "SVIET College",
//   address: {
//     city: "ranchi",
//     state: "Jharkhand"
//   }
// };
// console.log(student.name);
// console.log(student.address.city);



// const user = {
//   username: "nikhil_yadav",
//   email: "nikhil@gmail.com",
//   followers: 1200,
//   bio: "Computer Science Student"
// };
// // Home Page: username only
// const { username } = user;
// console.log(username);
// // Profile Page: username, bio, followers
// const { bio, followers } = user;
// console.log(username);
// console.log(bio);
// console.log(followers);



// const student = {
//     name: "Rahul",
//     age: 20
// };
// const updatedStudent = {
//     ...student,
//     branch: "CSE"
// };
// console.log(student);
// console.log(updatedStudent);



// let books = ["Math", "Java", "Python"];
// // push
// books.push("C++");
// console.log(books);
// // pop
// books.pop();
// console.log(books);
// // shift
// books.shift();
// console.log(books);
// // unshift
// books.unshift("English");
// console.log(books);
// // slice
// let newBooks = books.slice(0, 2);
// console.log(newBooks);



// const products = [
//     { name: "Laptop", price: 65000 },
//     { name: "Phone", price: 25000 },
//     { name: "Mouse", price: 800 },
//     { name: "Keyboard", price: 1200 }
// ];
// products.map(product => {
//     console.log(`Product Card
// Name: ${product.name}
// Price: ₹${product.price}`);
// });//map()? map() is used to transform each item.




// const products = [
//     { name: "Milk", price: 40 },
//     { name: "Rice", price: 80 },
//     { name: "Sugar", price: 60 },
//     { name: "Salt", price: 20 }
// ];
// const expensiveProducts = products.filter(product => product.price > 50);
// console.log(expensiveProducts);



// const employees = [
//     { id: 101, name: "Rahul" },
//     { id: 102, name: "Aman" },
//     { id: 103, name: "Priya" }
// ];
// const employee = employees.find(emp => emp.id === 102);
// console.log(employee);//find()?Returns the first matching object.Stops searching once found.




// const prices = [250, 150, 300, 500];
// const total = prices.reduce((sum, price) => sum + price, 0);
// console.log(total);



// let isLoggedIn = true;
// if (isLoggedIn) {
//     console.log("Dashboard");
// } else {
//     console.log("Login");
// }




// async function getposts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await response.json();
//     console.log(data);      
// }
// getposts();