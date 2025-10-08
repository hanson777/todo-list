export default class UI {
    constructor(todoList) {
        this.todolist = todoList;
    }

    render() {
        this.createProjects(this.todolist);
        this.createTasks(this.todolist);
    }

    bindEvents() {
        document.addEventListener("click", (e) => {
            const button = e.target;
            if(button.classList.contains("add-task")){
                this.loadAddTaskPopup();
            }
        });
    }

    createProjects(todoList){
        
        const sidebar = document.querySelector(".sidebar");

        todoList.getProjects().forEach((project) => {
            const newProject = document.createElement("button");
            newProject.classList.add("sidebar-item");
            newProject.textContent = `${project.getName()}`;
            sidebar.appendChild(newProject);
        });
    }

    createTasks(todoList){
        let flag = true;
        const tasklist = document.querySelector(".tasklist");

        todoList.getProjects().forEach((project, index) => {
            if(flag){
                const projectTitle = document.createElement("div");
                projectTitle.classList.add("tasklist-item");
                projectTitle.classList.add("project-title");
                projectTitle.textContent = `${todoList.getProjects()[index].getName()}`
                tasklist.appendChild(projectTitle);
                flag = false;
            }
            const newTask = document.createElement("li");
            newTask.classList.add("tasklist-item");
            newTask.textContent = `${project.getAllTasks()[index].getName()}`;
            tasklist.appendChild(newTask);           
        });
    }

    loadAddTaskPopup() {
    }


}