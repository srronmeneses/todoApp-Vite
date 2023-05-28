/*hack: ?raw forma de importar un HTML en crudo*/
import html from "./app.html?raw"; 
import todoStore from "../store/todo.store";
import { renderTodo } from "./use-cases";

const ElementIDs = {
    todolist: `.todo-list`,
    newTodo: `.new-todo`,
}
/**
 * 
 * @param {String} elemmentId lugar en donde se renderiza la App
 */
export const App = (elemmentId) => {

    const displayTodo = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodo(ElementIDs.todolist, todos);
    }

    (() => {
        const app = document.createElement(`div`);
        app.innerHTML = html;
        document.querySelector(elemmentId).append(app);
        displayTodo();
    })();

    const newTodo = document.querySelector(ElementIDs.newTodo);
    const delete_toggle = document.querySelector(ElementIDs.todolist);

    newTodo.addEventListener(`keyup`, (e) => {
        if(e.keyCode !== 13) return;
        if(e.target.value.trim().length === 0) return;
        todoStore.addTodo(e.target.value);
        displayTodo();
        e.target.value = ``;
    });
    delete_toggle.addEventListener(`click`, (e) => {
        const todoId = e.target.closest`[data-id]`.getAttribute(`data-id`);
        console.log(e.target.className);
        if(e.target.className === `toggle`) todoStore.toggleTodo(todoId);
        if(e.target.className === `destroy`) todoStore.deleteTodo(todoId);
        displayTodo();
    })
}