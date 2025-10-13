import TodoList from "./TodoList";
import UI from "./UI";
import Storage from "./Storage";

export default class Controller {

    static bindEvents(todoList) {
        document.querySelector(".add-button").addEventListener("click", () => {
        UI.hideElement(".add-button");
        UI.loadNewTaskPopup();

        const confirmBtn = document.querySelector(".confirm-add-task");
        confirmBtn.addEventListener("click", () => {
            const success = UI.addTask(todoList);
            if (!success) return;

            UI.hideElement(".confirm-add-task");
            UI.hideElement(".name-input");
            UI.loadTasks(todoList);
    });
});

        document.querySelector(".add-project-button").addEventListener("click", () => {
            UI.hideElement(".add-project-button");
            UI.loadNewProjectPopup();
            const confirmBtn = document.querySelector(".confirm-add-project");
            confirmBtn.addEventListener("click", () => {
                const success = UI.addProject(todoList);
                if(!success) return;
                UI.hideElement(".confirm-add-project");
                UI.hideElement(".project-input");
                UI.populateSidebar(todoList);
            });
        });

        document.addEventListener("click", (e) => {
            if(e.target.classList.contains("project")){
                const projectName = e.target.textContent;
                todoList.setCurrentProject(projectName);
                UI.loadTasks(todoList);
            }
        });
    }
}

