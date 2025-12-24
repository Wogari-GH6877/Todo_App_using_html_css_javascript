const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const totalElem = document.getElementById('total-count');
const completedElem = document.getElementById('completed-count');
const clearBtn = document.getElementById('clear-all');

let total = 0;
let completed = 0;

function updateStats() {
    totalElem.innerText = total;
    completedElem.innerText = completed;
}

addBtn.addEventListener('click', () => {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    
    li.querySelector('.complete-btn').addEventListener('click', () => {
        li.classList.toggle('completed');
        if (li.classList.contains('completed')) {
            completed++;
        } else {
            completed--;
        }
        updateStats();
    });

    
    li.querySelector('.delete-btn').addEventListener('click', () => {
        if (li.classList.contains('completed')) {
            completed--;
        }
        total--;
        li.remove();
        updateStats();
    });

    todoList.appendChild(li);
    total++;
    updateStats();
    input.value = ""; 
});


clearBtn.addEventListener('click', () => {
    todoList.innerHTML = "";
    total = 0;
    completed = 0;
    updateStats();
});