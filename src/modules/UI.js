import Project from "./Project";
import TodoList from "./TodoList";
import Task from "./Task";
import Storage from "./Storage";

export default class UI {

    static createProject(project) {
        const item = document.createElement("button");
        item.classList.add("sidebar-item");
        item.textContent = project.getName();
        return item;
    }

    static loadDefaultProjects(todoList) {
        const fragment = document.createDocumentFragment();
        const defaultProjects = todoList.getProjects().filter((p) => 
            p.getName() === "Inbox" ||
            p.getName() === "Today" ||
            p.getName() === "This week")                                        
        defaultProjects.forEach((proj) => {
            fragment.appendChild(UI.createProject(proj));
        });
        return fragment;
    }

    static loadCustomProjects(todoList) {
        const fragment = document.createDocumentFragment();
        const customProjects = todoList.getProjects().filter((p) => 
            p.getName() !== "Inbox" &&
            p.getName() !== "Today" &&
            p.getName() !== "This week") 
        customProjects.forEach((proj) => {
            fragment.appendChild(UI.createProject(proj));
        });
        return fragment;
    }

    static populateSidebar(todoList) {
        const sidebar = document.querySelector(".sidebar");
        const fragment = document.createDocumentFragment();
        fragment.appendChild(UI.loadDefaultProjects(todoList));
        fragment.appendChild(UI.loadCustomProjects(todoList));
        sidebar.replaceChildren(fragment);
    }

    static createTaskItem(task) {
        const item = document.createElement("li");
        item.classList.add("tasklist-item");
        item.textContent = task.getName();
        return item;
    }

    static loadTasks(todoList) {
        UI.showAddTaskButton();
        const fragment = document.createDocumentFragment();
        const taskContainer = document.querySelector(".task-container");
        const currentProject = todoList.getCurrentProject();
        currentProject.getTasks().forEach((task) => {
            fragment.appendChild(UI.createTaskItem(task));
        });
        taskContainer.replaceChildren(fragment);
    }

    static createNewTaskInput() {
        const input = document.createElement("input");
        input.setAttribute("id", "task-title")
        input.classList.add("name-input", "tasklist-item"); 
        return input;
    }

    static createNewTaskButton() {
        const btn = document.createElement("button");
        btn.classList.add("confirm-add-task", "tasklist-item");
        btn.textContent = "Add";
        return btn;
    }

    static loadNewTaskPopup() {
        const fragment = document.createDocumentFragment();
        const popupContainer = document.querySelector(".popup-container");
        fragment.appendChild(UI.createNewTaskInput());
        fragment.appendChild(UI.createNewTaskButton());
        popupContainer.replaceChildren(fragment);
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
        const addBtn = document.querySelector(".confirm-add-task");
        addBtn.classList.add("hidden");
    }

    static hideInput() {
        const input = document.querySelector(".name-input");
        input.classList.add("hidden");
    }

    static addTask(todoList) {
        const input = document.querySelector(".name-input").value;
        todoList.getCurrentProject().addTask(new Task(input));
    }

    static taskNameEmpty() {
        const input = document.querySelector(".name-input").value;
        return input === "";
    }

    static warn() {
        alert("Task name cannot be empty");
    }
}