export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    setName(name) {
        this.name = name;
        return this;
    }

    getName() {
        return this.name;
    }

    addTask(task) {
        this.tasks.push(task);
        return this;
    }

    deleteTask(taskToRemove) {
        this.tasks = this.tasks.filter((task) => task.id !== taskToRemove.id);
        return this;
    }

    getTasks() {
        return this.tasks;
    }
}