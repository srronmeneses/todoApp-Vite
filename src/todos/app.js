/*hack: ?raw forma de importar un HTML en crudo*/
import html from "./app.html?raw"; 
import todoStore from "../store/todo.store";
import { renderTodo } from "./use-cases";

const ElementIDs = {
    Todolist: `.todo-list`,
}
/**
 * 
 * @param {String} elemmentId lugar en donde se renderiza la App
 */
export const App = (elemmentId) => {

    const displayTodo = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodo(ElementIDs.Todolist, todos);
    }

    (() => {
        const app = document.createElement(`div`);
        app.innerHTML = html;
        document.querySelector(elemmentId).append(app);
        displayTodo();
    })();
}