import { Todo } from "../models/todo.model";
import { todoHtml } from "./todo.html";
let element;
/**
 * 
 * @param {String} elementId 
 * @param {Todo} todo 
 */
export const renderTodo = (elementId, todo = []) => {
    if(!element) element = document.querySelector(elementId);
    if(!element) throw new Error(`element ${elementId} not found`);
    element.innerHTML = ``;
    todo.forEach(todo => {
        element.append(todoHtml(todo))
    });
}