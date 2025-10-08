import "./modules/styles/global-styles.css";
import "./modules/styles/sidebar-styles.css";
import "./modules/styles/tasklist-styles.css";
import UI from "./modules/UI";
import TodoList from "./modules/TodoList";
import Task from "./modules/Task";

const task = new Task("Study", "Review JS", "High", "10-07-2025");

const todoList = new TodoList();
todoList.getProjects()[0].addTask(task);

const ui = new UI(todoList);
ui.render();

