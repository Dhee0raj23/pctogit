
// // let items = document.getElementsByClassName('list-group-item');
// // items[2].style.backgroundColor = 'green';
// // let allItems = document.getElementById("items");
// // allItems.style.fontWeight="bold";


// //get element by tag name;
// // let li = document.getElementsByTagName('li');
// // li[4].textContent="hello";
// // li[4].style.backgroundColor="red"
// // li[4].style.color="blue";

// //get element by class name;
// let newList = document.getElementsByClassName("new-list-item")
// newList[0].textContent="hello";
// newList[0].style.backgroundColor="red";
// newList[0].style.color="blue";

  //queryslector-->only use for one item;
//   let SecItem = document.querySelector(".list-group-item:nth-child(2)");
//   SecItem.style.backgroundColor="green";

//  let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
//  thirdItem.style.display="none";

//queryslectorall
// let SecItem = document.querySelectorAll("#items li")[1];
// SecItem.style.color="green";

// let odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i =0; i<odd.length; i++){
//     odd[i].style.backgroundColor="green";
// }

let itemList = document.querySelector('#items');

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';  //parentelement;

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='hi';  //lastelementchild;

console.log(itemList.lastChild); //lastchild;

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hi2';   //firstelementchild;

console.log(itemList.firstChild);   //firstChild;

console.log(itemList.nextSibling);  //nextSibiling;

console.log(itemList.nextElementSibling);  //nextElementsibiling;

console.log(itemList.previousSibling);    //previousSibling

console.log(itemList.previousElementSibling);       //previousElementSibling;

let newDiv = document.createElement('div');     //create element;
newDiv.className='hello';    //add class;
newDiv.id='hello1'        //add id;
newDiv.setAttribute('titlt' , 'hello Div');   //add attribute;

let newDivText = document.createTextNode('HEllo word ');    //create textNode;
newDiv.appendChild(newDivText);       //appendchild;

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv , h1);

// let container1 = document.querySelector('header .container');
// let h2 = document.querySelector('header h2');
// container1.insertBefore(newDiv , h2);
