import Project from "./Project";
import TodoList from "./TodoList";
import Task from "./Task";
import Storage from "./Storage";

export default class UI {
    
    static loadProjects(todoList) {
        const fragment = document.createDocumentFragment();
        const sidebar = document.querySelector(".sidebar");
        todoList.getProjects().forEach((proj) => {
            const project = document.createElement("button");
            project.classList.add("sidebar-item");
            project.textContent = proj.getName();
            fragment.appendChild(project);
        });
        sidebar.replaceChildren(fragment);
    }

    static loadTasks(todoList) {
        const addBtn = document.querySelector(".add-button");
        addBtn.classList.remove("hidden");
        const fragment = document.createDocumentFragment();
        const taskContainer = document.querySelector(".task-container");
        const currentProject = todoList.getCurrentProject();
        currentProject.getTasks().forEach((t) => {
            const task = document.createElement("li");
            task.classList.add("tasklist-item");
            task.textContent = t.getName();
            fragment.appendChild(task);
        });
        taskContainer.replaceChildren(fragment);
    }

    static loadNewTaskPopup() {
        this.clearPopupContainer();
        const fragment = document.createDocumentFragment();
        const popupContainer = document.querySelector(".popup-container");
        const nameInput = document.createElement("input");
        nameInput.setAttribute("id", "task-title")
        nameInput.classList.add("name-input", "tasklist-item"); 
        const btn = document.createElement("button");
        btn.classList.add("confirm-add-task", "tasklist-item");
        btn.textContent = "Add";
        fragment.appendChild(nameInput);
        fragment.appendChild(btn);
        popupContainer.appendChild(fragment);
    }

    static clearPopupContainer() {
        document.querySelector(".popup-container").replaceChildren();
    }

    static hideAddTaskButton() {
        const addBtn = document.querySelector(".add-button");
        addBtn.classList.add("hidden");
    }

    static showAddTaskButton() {
        const addBtn = document.querySelector(".add-button");
        addBtn.classList.remove("hidden");
    }

    static hideConfirmButton() {
        const input = document.querySelector(".name-input");
        const addBtn = document.querySelector(".confirm-add-task");
        input.classList.add("hidden");
        addBtn.classList.add("hidden");
    }

    static addTask(todoList) {
        const input = document.querySelector(".name-input").value;
        todoList.getCurrentProject().addTask(new Task(input));
    }
}