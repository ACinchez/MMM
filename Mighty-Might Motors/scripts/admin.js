const form = document.getElementById('form');
const titleInput = document.getElementById('title');
const descInput = document.getElementById('description');
const tableBody = document.getElementById('table-body');

// Define a variable to store the inventory items
let inventory = [];

// Define a function to add an item to the inventory
function addItem(title, description) {
  inventory.push({ title, description });
  displayInventory();
}

// Define a function to display the inventory items in the table
function displayInventory() {
  tableBody.innerHTML = '';
  inventory.forEach((item, index) => {
    const tr = document.createElement('tr');
    const titleTd = document.createElement('td');
    const descTd = document.createElement('td');
    const actionTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    titleTd.textContent = item.title;
    descTd.textContent = item.description;
    deleteBtn.textContent = 'Delete';
    editBtn.textContent = 'Edit';

    deleteBtn.addEventListener('click', () => {
      deleteItem(index);
    });

    editBtn.addEventListener('click', () => {
      editItem(index);
    });

    actionTd.appendChild(editBtn);
    actionTd.appendChild(deleteBtn);

    tr.appendChild(titleTd);
    tr.appendChild(descTd);
    tr.appendChild(actionTd);

    tableBody.appendChild(tr);
  });
}

// Define a function to delete an item from the inventory
function deleteItem(index) {
  inventory.splice(index, 1);
  displayInventory();
}

// Define a function to edit an item in the inventory
function editItem(index) {
  const item = inventory[index];
  titleInput.value = item.title;
  descInput.value = item.description;

  form.removeEventListener('submit', handleSubmit);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    item.title = titleInput.value;
    item.description = descInput.value;
    displayInventory();
    form.reset();
    form.removeEventListener('submit', handleSubmit);
    form.addEventListener('submit', handleSubmit);
  });
}

// Define a function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const title = titleInput.value;
  const description = descInput.value;
  addItem(title, description);
  form.reset();
}

// Add event listeners
form.addEventListener('submit', handleSubmit);

// Initialize the table
displayInventory();