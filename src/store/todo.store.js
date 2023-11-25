import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: `All`,
    Completed: `Completed`,
    Pending: `Pending`
}
const state = {
    todos: [
        new Todo(`Curso de JavaScript`),
        new Todo(`curso de TypeScript`),
        new Todo(`Curso de React`),
        new Todo(`Curso de Next`),
        new Todo(`Curso de Flutter`),
    ],
    filter: Filters.All,
}
const initStore = () => {
    loadStore();
    console.log(`InitStore 👨🏻‍💻`);
}
/**
 * 
 * @param {Filters} filter un objeto de filtros
 * @returns {Array} Todos
 */
const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed: 
            return state.todos.filter(todo => todo.done);
        case Filters.Pending: 
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid..`)
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if(!description) throw new Error (`description is required!`);
    state.todos.push(new Todo(description));
    saveLocalStorage();
}
/**
 * 
 * @param {String} todoId identificador del Todo
 */
const toggleTodo = (todoId) => {
    if(!todoId) throw new Error(`todoId is required`)
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    });
    saveLocalStorage();
}
/**
 * 
 * @param {String} todoId identificado del Todo
 */
const deleteTodo = (todoId) => {
    if (!todoId) throw new Error(`todoId is required`);
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveLocalStorage();
}
/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveLocalStorage();
}
const getCurrentFilter =  () => {
    return state.filter;
}
const saveLocalStorage = () => {
    localStorage.setItem(`state`, JSON.stringify(state));
}
const loadStore = () => {
    if(!localStorage.getItem(`state`)) return;
    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem(`state`));
    state.todos = todos;
    state.filter = filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore: initStore,
    setFilter,
    toggleTodo,
}