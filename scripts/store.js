import item from "./item.js";

export default {
  items: [],
  hideCheckedItems: false,
  addItem,
  findById,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};

function findById(id) {
  return this.items.find((item) => item.id === id);
}

function addItem(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id) {
  let item = this.findById(id);
  item.checked = !item.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    this.findById().name = newName;
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  this.items = this.items.filter((item) => item.id !== id);
}

function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
}
 

