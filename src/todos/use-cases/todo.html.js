import { Todo } from "../models/todo.model";

/**
 * 
 * @param {Todo} todo 
 */
export const todoHtml = (todo) => {
    const liElement = document.createElement(`li`);
    const {id, description, done} = todo;
    const html = `
    <div class="view">
        <input class="toggle" type="checkbox" ${done ? `checked`: ``}>
        <label>${description}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">`;
    liElement.setAttribute(`data-id`, id);
    if(done) liElement.classList.add(`completed`);
    liElement.innerHTML = html;
    return liElement;
}