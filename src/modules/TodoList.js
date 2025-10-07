import "./Project";

class TodoList {
    constructor() {
        this.projects = [];
        this.projects.push(new Project("Inbox"));
    }

    addProject(){
        this.projects.push(new Project());
        return this;
    }
    
    getProjects(){
        return this.projects;
    }
}