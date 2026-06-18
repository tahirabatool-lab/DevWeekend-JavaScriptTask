let tasks = [];

let input = document.getElementById('taskinput');
let button = document.getElementById('addbtn');
let list = document.getElementById('taskList');
let emptyText = document.getElementById('emptyText');

button.addEventListener("click", function () {
    let value = input.value.trim();

    if (value === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(value);
    input.value = "";
    renderUi();
});

function renderUi() {
    list.innerHTML = "";

    if (tasks.length === 0) {
        emptyText.style.display = "block";
    } else {
        emptyText.style.display = "none";
    }

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        list.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderUi();
}

// IMPORTANT: initial render
renderUi();