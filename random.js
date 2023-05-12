let form = document.getElementById('addForm')
let ListItems = document.getElementById('items');
let filter = document.getElementById('filter')

form.addEventListener('submit',addItem);
function addItem(e){
    e.preventDefault();
    let itemValue = document.getElementById('input-field').value;
    let itemvalue2=document.getElementById('input-field2').value;
    


    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(itemValue+"-"+itemvalue2));



    let button = document.createElement('button');
    button.className='btn btn-outline-dark btn-sm float-right delete';
    button.textContent="Delete"
    li.appendChild(button);

    let editButton = document.createElement('button');
    editButton.className='btn btn-outline-success btn-sm float-right edit';
    editButton.textContent='Edit';
    li.appendChild(editButton)

    ListItems.appendChild(li);

}
//save to local storage
form.addEventListener('submit',addToLocalStorage);

function addToLocalStorage(e){
    e.preventDefault();
    const inputValue1= document.getElementById('input-field').value;
    const inputValue2=document.getElementById('input-field2').value;
    let myobj={
        inputValue1,
        inputValue2
    }
   
    localStorage.setItem(myobj.inputValue1, JSON.stringify(myobj));
}


ListItems.addEventListener('click', removeList);

function removeList(e){
    if(e.target.classList.contains('delete')){
        let li =e.target.parentElement;
        ListItems.removeChild(li);
    }
}

filter.addEventListener('keyup',filterItem)
function filterItem(e) {
        let lowerCaseText = e.target.value.toLowerCase();
        let items = document.getElementsByTagName('li');
        Array.from(items).forEach(function(item){
            var itemName = item.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(lowerCaseText)!=-1){
                item.style.display='block';
            }
            else{
                item.style.display='none';
            }
        })
}
  