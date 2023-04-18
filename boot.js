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
    axios.post("https://crudcrud.com/api/a5803a72ef2543049493a74ddb959d22/appointmentData",obj)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/a5803a72ef2543049493a74ddb959d22")
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        console.log(error)
    })

})
function showNewUserOnScreen(obj){
    
    const parentElement=document.getElementById('listOfItems');
    const childElement = document.createElement('li');
    childElement.textContent=obj.name+'-'+obj.email+'-'+obj.phoneNo
    parentElement.appendChild(childElement)
}

