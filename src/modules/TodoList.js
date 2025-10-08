import Project from "./Project";

export default class TodoList {
    constructor() {
        this.projects = [];
        this.projects.push(new Project("Inbox"));
    }

    addProject(project){
        this.projects.push(project);
        return this;
    }
    
    getProjects(){
        return this.projects;
    }
}