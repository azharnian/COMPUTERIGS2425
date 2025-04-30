let items = [];

const inputFieldEl = document.getElementById("input-field");
const shoppingListEl = document.getElementById("shopping-list");
const formEl = document.getElementById("formInput");

function renderItem(item, index) {
    const li = document.createElement("li");
    li.innerText = item;

    const removeBtn = document.createElement("span");
    removeBtn.innerText = "x";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", () => {
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
    renderList();
    });

    li.appendChild(removeBtn);
    shoppingListEl.appendChild(li);
}

function renderList() {
    shoppingListEl.innerHTML = "";
    items.forEach((item, index) => {
    renderItem(item, index);
    });
}

if (localStorage.getItem("items")) {
    items = JSON.parse(localStorage.getItem("items"));
    renderList();
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = inputFieldEl.value.trim();

    if (data.length > 0) {
    items.push(data);
    localStorage.setItem("items", JSON.stringify(items));
    renderList();
    inputFieldEl.value = "";
    alert('Success.');
    } else {
    alert('Invalid input. Please try again.');
    }
});