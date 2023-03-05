function toLocalStorage(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const phoneNumber = event.target.phonenumber.value;
  const obj = { name, email, phoneNumber };
  localStorage.setItem(obj.email, JSON.stringify(obj));
  showUserOnScreen(obj);
  event.target.reset();
}
function showUserOnScreen(obj) {
  const parentElement = document.getElementById('listOfItem');
  const childElement = document.createElement('li');
  childElement.setAttribute('data-email', obj.email);
  childElement.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phoneNumber;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteItem);
  childElement.appendChild(deleteButton);
  parentElement.appendChild(childElement);
}
function deleteItem(event) {
  const li = event.target.parentElement;
  const email = li.getAttribute('data-email');
  localStorage.removeItem(email);
  li.remove();
}
const form = document.querySelector('form');
form.addEventListener('submit', toLocalStorage);

for (let i = 0; i < localStorage.length; i++) {
  const email = localStorage.key(i);
  const obj = JSON.parse(localStorage.getItem(email));
  showUserOnScreen(obj);
}