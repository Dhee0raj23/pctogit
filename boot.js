function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email=event.target.email.value;
    const phoneNo=event.target.phone.value;

    const obj={
        name,
        email,
        phoneNo
    }
    axios.post("https://crudcrud.com/api/07c6ad5d0a12453d94084c07e59d0a1e/appointmentData",obj)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
    //localStorage.setItem(obj.email,JSON.stringify(obj))
    //showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/07c6ad5d0a12453d94084c07e59d0a1e/appointmentData")
    .then((response)=>{
        for(var i=0; i<response.data.length; i++){
            showNewUserOnScreen(response.data[i])
        }
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
})

function showNewUserOnScreen(obj){
    const parentElement = document.getElementById("listOfItems");
      const childElement = document.createElement("li");
      childElement.textContent = obj.name + "-" + obj.email + "-" + obj.phoneNo;
      const deleteButton = document.createElement("input");
      deleteButton.type = "button";
      deleteButton.value = "delete";
      deleteButton.onclick = () => {
        axios
          .delete(
            `https://crudcrud.com/api/07c6ad5d0a12453d94084c07e59d0a1e/appointmentData/${obj._id}`
          )
          .then((response) => {
            console.log(response);
            localStorage.removeItem(obj.email);
            parentElement.removeChild(childElement);
          })
          .catch((err) => {
            console.log(err);
          });
      };
   

      const editButton = document.createElement('input');
      editButton.type='button';
      editButton.value='edit';
      editButton.onclick=()=>{
        localStorage.removeItem(obj.email)
        parentElement.removeChild(childElement)
        document.getElementById('name').value=obj.name
        document.getElementById('email').value=obj.email
        document.getElementById('phone').value=obj.phoneNo
      }
      axios.put(`https://crudcrud.com/api/07c6ad5d0a12453d94084c07e59d0a1e/appointmentData/${userId}`, obj)
      .then((response)=>{
          console.log(response)
      })
      .catch((err)=>{
          console.log(err)
      })
      childElement.appendChild(deleteButton);
      parentElement.appendChild(childElement);
      childElement.appendChild(editButton)
}
