// ฟังก์ชันแสดงคำทักทายเมื่อคลิกปุ่ม
function showGreeting() {
    const name = prompt('คุณชื่ออะไรครับ?');
    if (name) {
        alert('สวัสดี ' + name + '! ยินดีที่ได้รู้จักครับ');
    }
}

// ฟังก์ชันเปลี่ยนสีพื้นหลัง
function changeBackground() {
    const colors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// ฟังก์ชันเพิ่มรายการใน To-Do List
function addTodoItem() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    
    if (todoInput.value.trim() !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = todoInput.value;
        todoList.appendChild(newItem);
        todoInput.value = '';
    }
}