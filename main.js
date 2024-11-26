document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector("#taskInput");
    const addButton = document.querySelector("#addTaskButton");
    const taskList = document.querySelector("#taskList");

    function addTask() {
        const taskText = inputField.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        taskItem.addEventListener("click", () => {
            taskItem.classList.toggle("Completed");
        })

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remover";
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(taskItem)
        })

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        inputField.value = "";
    }

    inputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    addButton.addEventListener("click", addTask);
});