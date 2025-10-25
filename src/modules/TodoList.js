import Project from "./Project";

export default class TodoList {
    constructor(skipDefault = false) {
        this.projects = [];
        this.currentProject = null;

        if (!skipDefault) {
            const defaultProject = new Project("Inbox");
            this.addProject(defaultProject);
            this.setCurrentProject(defaultProject.getName());
        }
    }

    addProject(project) {
        this.projects.push(project);
        return this;
    }

    deleteProject(name) {
        this.projects = this.projects.filter((project) => project.getName() !== name);
    }

    getCurrentProject() {
        return this.currentProject;
    }

    setCurrentProject(name) {
        this.currentProject = this.projects.find((p) => p.getName() === name);
    }

    getProjectByName(name) {
        this.projects.find((project) => project.getName() === name);
    }

    deleteProject(name){
        this.projects.filter((project) => project.getName() !== name);
    }
    
    getProjects(){
        return this.projects;
    }
}