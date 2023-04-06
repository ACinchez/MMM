const API_URL = 'https://example.com/api/users';

function getUsers() {
  fetch(API_URL, {
    headers: {
      'Authorization': 'Bearer ' + getAdminToken(),
    },
  })
  .then(response => response.json())
  .then(users => {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    users.forEach(user => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>
          <button onclick="editUser(${user.id})">Edit</button>
          <button onclick="deleteUser(${user.id})">Delete</button>
        </td>
      `;
      userList.appendChild(tr);
    });
  });
}

function createUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getAdminToken(),
    },
    body: JSON.stringify({ name, email, password }),
  })
  .then(response => { 
    if (response.ok) {
        getUsers();
      } else {
        alert('Error creating user');
      }
    });
}

function editUser(id) {
const name = prompt('Enter new name:');
const email = prompt('Enter new email:');
const password = prompt('Enter new password:');
fetch(API_URL + '/' + id, {
method: 'PUT',
headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer ' + getAdminToken(),
},
body: JSON.stringify({ name, email, password }),
})
.then(response => {
if (response.ok) {
getUsers();
} else {
alert('Error editing user');
}
});
}

function deleteUser(id) {
if (confirm('Are you sure you want to delete this user?')) {
fetch(API_URL + '/' + id, {
method: 'DELETE',
headers: {
'Authorization': 'Bearer ' + getAdminToken(),
},
})
.then(response => {
if (response.ok) {
getUsers();
} else {
alert('Error deleting user');
}
});
}
}

function getAdminToken() {
// This function should retrieve an admin authentication token
// from a secure source, such as a cookie or localStorage.
// For the purposes of this example, we'll just hard-code it.
return 'example_token';
}

getUsers();