let myObj = {
   name: "Dheeraj",
   age: 23
}; 

let myObj_Serialized = JSON.stringify(myObj);


localStorage.setItem("myObj",myObj_Serialized);
console.log(localStorage);

let myobj2={name:'dhee', age:93};
let mos = JSON.stringify(myobj2);
localStorage.setItem("myobj2", mos);
console.log(localStorage);