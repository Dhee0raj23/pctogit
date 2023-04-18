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