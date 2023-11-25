/*hack: ?raw forma de importar un HTML en crudo*/
import html from "./app.html?raw"; 
import todoStore, { Filters } from "../store/todo.store";
import { renderPending, renderTodo } from "./use-cases";

const ElementIDs = {
    FilterLi: `.filtro`,
    ClearCompleted: `.clear-completed`,
    Todolist: `.todo-list`,
    NewTodo: `.new-todo`,
    PendingCount: `#pending-count`,
}
/*bug: comment*/
/**
 * 
 * @param {String} elementId lugar en donde renderiza la App
 */

export const App = (elementId) => {
    
    const updatePending = () => {
        renderPending(ElementIDs.PendingCount);        
    }
    const displayTodo = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodo(ElementIDs.Todolist, todos);
        updatePending();
    }

    (() => {
        const app = document.createElement(`div`);
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodo();
    })();

    const newTodo = document.querySelector(ElementIDs.NewTodo);
    const delete_toggle = document.querySelector(ElementIDs.Todolist);
    const clearCompleted = document.querySelector(ElementIDs.ClearCompleted);
    const filterLi = document.querySelectorAll(ElementIDs.FilterLi);

    newTodo.addEventListener(`keyup`, (e) => {
        if(e.keyCode !== 13) return;
        if(e.target.value.trim().length === 0) return;
        todoStore.addTodo(e.target.value);
        displayTodo();
        e.target.value = ``;
    });
    delete_toggle.addEventListener(`click`, (e) => {
        const todoId = e.target.closest`[data-id]`.getAttribute(`data-id`);
        if(e.target.className === `toggle`) todoStore.toggleTodo(todoId);
        if(e.target.className === `destroy`) todoStore.deleteTodo(todoId);
        displayTodo();
    });
    clearCompleted.addEventListener(`click`, () => {
        todoStore.deleteCompleted();
        displayTodo();
    });
    filterLi.forEach(element => {
        element.addEventListener(`click`, (e) => {
            filterLi.forEach(ele => ele.classList.remove(`selected`));
            e.target.classList.add(`selected`);
            switch (e.target.text) {
                case `Todos`:
                    todoStore.setFilter(Filters.All);
                    break;
                case `Completados`:
                    todoStore.setFilter(Filters.Completed);
                    break;
                case `Pendientes`:
                    todoStore.setFilter(Filters.Pending);
                    break;
                default:
                    throw new Error(`Option not found`);
            };
            displayTodo();
        });
    });   
    
}