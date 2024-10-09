document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("task-list");
    const newTaskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const allButton = document.getElementById("all");
    const completedButton = document.getElementById("completed");
    const notCompletedButton = document.getElementById("not-completed");

    // Add new task
    addTaskButton.addEventListener("click", () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            const newTask = document.createElement("li");
            newTask.classList.add("task");
            newTask.setAttribute("data-completed", "false");
            newTask.textContent = taskText;
            taskList.appendChild(newTask);
            newTaskInput.value = ""; // Clear input
        }
    });

    // Toggle task status
    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("task")) {
            const task = e.target;
            const isCompleted = task.getAttribute("data-completed") === "true";
            task.setAttribute("data-completed", !isCompleted);
            task.classList.toggle("completed");
        }
    });

    // Filter tasks
    allButton.addEventListener("click", () => filterTasks("all"));
    completedButton.addEventListener("click", () => filterTasks("completed"));
    notCompletedButton.addEventListener("click", () => filterTasks("not-completed"));

    function filterTasks(type) {
        const tasks = taskList.querySelectorAll(".task");
        tasks.forEach(task => {
            const isCompleted = task.getAttribute("data-completed") === "true";
            if (type === "all") {
                task.style.display = "block";
            } else if (type === "completed") {
                task.style.display = isCompleted ? "block" : "none";
            } else if (type === "not-completed") {
                task.style.display = !isCompleted ? "block" : "none";
            }
        });
    }
});