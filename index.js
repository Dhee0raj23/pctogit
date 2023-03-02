
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
  let SecItem = document.querySelector(".list-group-item:nth-child(2)");
  SecItem.style.backgroundColor="green";

 let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
 thirdItem.style.display="none";