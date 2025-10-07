export default class Task {
    constructor(title, description, priority, date) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.date = date;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    getName() {
        return this.name;
    }

    setDescription(description) {
        this.description = description;
        return this;
    }

    getDescription() {
        return this.description;
    }

    setPriority(priority) {
        this.priority = priority;
        return this;
    }

    getPriority() {
        return this.priority;
    }

    setDate(date) {
        this.date = date;
        return this;
    }

    getPriority() {
        return this.date;
    }
}

