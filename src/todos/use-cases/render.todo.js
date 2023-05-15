import { Todo } from "../models/todo.model";
import { todoHtml } from "./todo.html";

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todo 
 */
export const renderTodo = (elementId, todo = []) => {
    const element = document.querySelector(elementId);
    todo.forEach(todo => {
        element.append(todoHtml(todo))
    });
}