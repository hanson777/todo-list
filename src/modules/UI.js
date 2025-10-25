import Project from "./Project";
import Task from "./Task";

export default class UI {

    static createProject(project) {
        const item = document.createElement("button");
        item.classList.add("sidebar-item");
        item.classList.add("project");
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

    static loadProjectHeader() {
        const fragment = document.createDocumentFragment();
        const header = document.createElement("h5"); 
        header.classList.add("sidebar-section-title");
        header.textContent = "Projects";
        fragment.appendChild(header);
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
        const projectContainer = document.querySelector(".project-container");
        const fragment = document.createDocumentFragment();
        fragment.appendChild(UI.loadDefaultProjects(todoList));
        fragment.appendChild(UI.loadProjectHeader());
        fragment.appendChild(UI.loadCustomProjects(todoList));
        UI.showElement(".add-project-button");
        projectContainer.replaceChildren(fragment);
    }

    static createTaskItem(task) {
        const item = document.createElement("li");
        item.classList.add("tasklist-item");
        item.textContent = task.getName();
        return item;
    }
    
    static createProjectHeader(todoList) {
        const projectHeader = document.createElement("h6");
        projectHeader.textContent = `${todoList.getCurrentProject().getName()}`;
        projectHeader.classList.add("tasklist-item", "project-header");
        return projectHeader;
    }

    static loadTasks(todoList) {
        UI.showElement(".add-button");
        const fragment = document.createDocumentFragment();
        const taskContainer = document.querySelector(".task-container");
        const currentProject = todoList.getCurrentProject();
        fragment.appendChild(UI.createProjectHeader(todoList));
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

    static createNewProjectInput() {
        const input = document.createElement("input");
        input.setAttribute("id", "project-name")
        input.classList.add("project-input", "sidebar-item"); 
        return input;
    }

    static createNewProjectButton() {
        const btn = document.createElement("button");
        btn.classList.add("confirm-add-project", "sidebar-item");
        btn.textContent = "Add";
        return btn;
    }

    static loadNewProjectPopup() {
        const fragment = document.createDocumentFragment();
        const popupContainer = document.querySelector(".project-popup-container");
        fragment.appendChild(UI.createNewProjectInput());
        fragment.appendChild(UI.createNewProjectButton());
        popupContainer.replaceChildren(fragment);
    }

    static addProject(todoList){
        const input = document.querySelector(".project-input").value.trim();

        if (!input) {
            alert("Project name cannot be empty!");
            return false;
        }
        
        todoList.addProject(new Project(input));
        return true;
    }

    static loadNewTaskPopup() {
        const fragment = document.createDocumentFragment();
        const popupContainer = document.querySelector(".task-popup-container");
        fragment.appendChild(UI.createNewTaskInput());
        fragment.appendChild(UI.createNewTaskButton());
        popupContainer.replaceChildren(fragment);
    }

    static addTask(todoList) {
        const input = document.querySelector(".name-input").value.trim();

        if (!input) {
            alert("Task name cannot be empty!");
            return false;
        }

        todoList.getCurrentProject().addTask(new Task(input));
        return true;
    }

    static taskNameEmpty() {
        const input = document.querySelector(".name-input").value;
        return input === "";
    }

    static hideElement(className){
        const ele = document.querySelector(`${className}`);
        ele.classList.add("hidden");
    }

    static showElement(className){
        const ele = document.querySelector(`${className}`);
        if(ele.classList.contains("hidden")) {
            ele.classList.remove("hidden");
        }
    }
}