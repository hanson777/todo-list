import TodoList from "./TodoList";
import Project from "./Project";
import Task from "./Task";

export default class Storage {
    static saveTodoList(todoList) {
        const plain = {
            projects: todoList.getProjects().map((project) => ({
                name: project.getName(),
                tasks: project.getTasks().map((task) => ({
                    name: task.getName(),
                }))
            })),
            currentProject: todoList.getCurrentProject().getName() || "Inbox",
        }
        localStorage.setItem("todoList", JSON.stringify(plain));
    }

    static loadTodoList() {
        const data = localStorage.getItem("todoList");
        if(!data || data == "undefined") return null;

        const parsed = JSON.parse(data);
        const todoList = new TodoList(true);

        parsed.projects.forEach((p) => {
            const project = new Project(p.name);
            p.tasks.forEach((t) => {
                project.addTask(new Task(t.name));
            })
            todoList.addProject(project);
        });

        if (parsed.currentProject) {
            todoList.setCurrentProject(parsed.currentProject);
        }
        return todoList;
    }
}
