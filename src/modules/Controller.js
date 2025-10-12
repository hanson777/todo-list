import UI from "./UI";

export default class Controller {

    static bindEvents(todoList) {
        document.querySelector(".add-button").addEventListener("click", () => {
            UI.hideElement(".add-button")
            UI.loadNewTaskPopup();
            document.querySelector(".confirm-add-task").addEventListener("click", () => {
                UI.hideElement(".confirm-add-task");
                UI.hideElement(".name-input");
                UI.addTask(todoList);
                UI.loadTasks(todoList);
            });
        });

        document.querySelector(".add-project-button").addEventListener("click", () => {
            UI.hideElement(".add-project-button");
            UI.loadNewProjectPopup();
            document.querySelector(".confirm-add-project").addEventListener("click", () => {
                UI.hideElement(".confirm-add-project");
                UI.hideElement(".project-input");
                UI.addProject(todoList);
                UI.populateSidebar(todoList);
            });
        });
    }
}
