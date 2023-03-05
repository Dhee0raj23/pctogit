function toLocalStorage(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const phoneNumber = event.target.phonenumber.value;
  const obj = { name, email, phoneNumber };
  localStorage.setItem(obj.email, JSON.stringify(obj));
  showUserOnScreen(obj);
}
function showUserOnScreen(obj) {
  const parentElement = document.getElementById('listOfItem');
  const childElement = document.createElement('li');
  childElement.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phoneNumber;
  parentElement.appendChild(childElement);
}
const form = document.querySelector('form');
form.addEventListener('submit', toLocalStorage);