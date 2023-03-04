let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter')

//form submit event;
form.addEventListener('submit', addItem);

function addItem(e){    //function for addItem list;
  e.preventDefault();
  let newItem = document.getElementById('item').value;    //get input value;
  let newItem2=document.getElementById('item1').value;
  let li = document.createElement('li');   //created a list;
  li.className = 'list-group-item';    //added class name;
  li.appendChild(document.createTextNode(newItem)); 
  li.appendChild(document.createTextNode(" "+newItem2))
 

  let delbutton = document.createElement('button');  //create delete button;
  let editButton = document.createElement('button');   //create edit button;
  delbutton.className = 'btn btn-danger btn-sm float-right delete';  //added class name;
  editButton.className='btn btn-sucess btn-sm float-right edit'
  delbutton.appendChild(document.createTextNode('X'));     //append text node;
  editButton.appendChild(document.createTextNode('Edit'));   //append edit text node;
  li.appendChild(delbutton);    //append button to li;
  li.appendChild(editButton);   //append edit button to li;
  itemList.appendChild(li);   //append li to list;  
  itemList.appendChild(li);    //append li to list;

}


// remove the item;

itemList.addEventListener('click' , removeItem);
function removeItem(e){
  if(e.target.classList.contains('delete')){
    let li =e.target.parentElement;
    itemList.removeChild(li);
  }
}


//filter the item;
filter.addEventListener('keyup', filterItems);
function filterItems(e){
  let text = e.target.value.toLowerCase();
  
  let items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    let itemName1 = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || itemName1.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }
    else{
      item.style.display = 'none';
    }
  });
}
