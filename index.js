var form = document.getElementById('inputs');
var itemList = document.getElementById('items');


form.addEventListener('submit', addLi);

function addLi(e){                                              //add li 
    e.preventDefault();
    var newItem=document.getElementById('addExpance').value;
    var newItem1=document.getElementById('description').value;
    var newItem2=document.getElementById('catagory').value;
    var li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode("-"+newItem1))
    li.appendChild(document.createTextNode("-"+newItem2));
    var delBtn = document.createElement('button');             //REMOVE BUTTON
    delBtn.className='btn btn-outline-dark btn-sm float-end delete';
    delBtn.appendChild(document.createTextNode('Remove'));
    li.appendChild(delBtn);
    var editBtn = document.createElement('button');            //EDIT BUTTON
    editBtn.className='btn btn-outline-dark btn-sm float-end edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li);   
}

form.addEventListener('submit',storeInLocal);
function storeInLocal(e){
    e.preventDefault();
    var ae=e.target.addExpance.value;
    var dec=e.target.description.value;
    var cat = e.target.catagory.value;

    const obj={
        ae,
        dec,
        cat
    };
    localStorage.setItem(obj.ae, JSON.stringify(obj));
    itemList.addEventListener('click',editItem);
      
}


itemList.addEventListener('click', removeItem);

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    var li = e.target.parentElement;
    var itemName = li.firstChild.textContent;
    itemList.removeChild(li);
    localStorage.removeItem(itemName);  // Remove the item from local storage
  }
}

itemList.addEventListener('click',editItem);
function editItem(e){
    e.preventDefault();
    var li = e.target.parentElement;
    var itemName=li.firstChild.textContent;
    itemList.removeChild(li);
    localStorage.removeItem(itemName);
    document.getElementsById('addExpance').value=obj.ae;
    document.getElementById('description').value=obj.dec;
    document.getElementById('catagory').value=obj.cat;

}