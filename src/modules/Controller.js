import UI from "./UI";

export default class Controller {

    static bindEvents(todoList) {
        document.querySelector(".add-button").addEventListener("click", () => {
            UI.hideAddTaskButton();
            UI.loadNewTaskPopup();
            document.querySelector(".confirm-add-task").addEventListener("click", () => {
                UI.hideConfirmButton();
                UI.addTask(todoList);
                UI.loadTasks(todoList);
            });
        });
    }
}
