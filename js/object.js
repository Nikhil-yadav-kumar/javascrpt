let obj={
    name:"Nikhil",
    age:20,
    weight:70,
    greet: function(){
        console.log("hello");

    }

}
console.log(obj);
obj.greet();
console.log(typeof(obj));
//shallow copy
let obj2=obj;

console.log(obj2)