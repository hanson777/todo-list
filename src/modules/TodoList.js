import Project from "./Project";

export default class TodoList {
    constructor() {
        this.projects = [];
        this.projects.push(new Project("Inbox"));
        this.currentProject = this.projects.find((p) => p.getName() === "Inbox");
    }

    addProject(project) {
        this.projects.push(project);
        return this;
    }

    deleteProject(name) {
        this.projects.filter((project) => project.getName() !== name);
    }

    getCurrentProject() {
        return this.currentProject;
    }

    getProjectByName(name) {
        this.projects.find((project) => project.getName() === name);
    }
    
    getProjects(){
        return this.projects;
    }
}