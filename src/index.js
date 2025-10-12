import "./modules/styles/global-styles.css";
import "./modules/styles/sidebar-styles.css";
import "./modules/styles/tasklist-styles.css";
import "./modules/styles/header-styles.css";
import Controller from "./modules/Controller";
import UI from "./modules/UI";
import TodoList from "./modules/TodoList";
import Project from "./modules/Project";
import Task from "./modules/Task";

const todoList = new TodoList();
todoList.addProject(new Project("Graduating University"));
todoList.addProject(new Project("Getting Hired"));

UI.populateSidebar(todoList);
UI.loadTasks(todoList);
Controller.bindEvents(todoList);

