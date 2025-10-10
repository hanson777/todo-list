import "./modules/styles/global-styles.css";
import "./modules/styles/sidebar-styles.css";
import "./modules/styles/tasklist-styles.css";
import Controller from "./modules/Controller";
import UI from "./modules/UI";
import TodoList from "./modules/TodoList";
import Task from "./modules/Task";

const todoList = new TodoList();

UI.loadProjects(todoList);
UI.loadTasks(todoList);
Controller.bindEvents(todoList);

