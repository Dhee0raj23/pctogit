let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// remove the item;

itemList.addEventListener('click' , removeItem);
function removeItem(e){
  if(e.target.classList.contains('delete')){
    let li =e.target.parentElement;
    itemList.removeChild(li);
  }
}
