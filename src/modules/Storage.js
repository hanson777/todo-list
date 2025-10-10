import TodoList from "./TodoList";

export default class Storage {
    static getTodoList() {
        return new TodoList();
    }
}