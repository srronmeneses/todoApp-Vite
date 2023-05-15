import { Todo } from "../models/todo.model";

/**
 * 
 * @param {Todo} todo 
 */
export const todoHtml = (todo) => {
    const liElement = document.createElement(`li`);
    const html = `<h1>${todo.description}</h1>`;
    liElement.innerHTML = html;
    return liElement;
}