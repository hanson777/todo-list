export default class Task {
    constructor(name, description, priority, date) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.date = date;
        this.id = Math.random();
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

    getPriority() {
        return this.date;
    }

    setDate(date) {
        this.date = date;
        return this;
    }

    getDate() {
        return this.date;
    }

    getId() {
        return this.id;
    }
}

