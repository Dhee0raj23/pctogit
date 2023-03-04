var form = document.querySelector('form');
form.addEventListener('submit', saveUserDetails);


function saveUserDetails(event) {
  event.preventDefault();
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var name = nameInput.value;
  var email = emailInput.value;
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  
}



