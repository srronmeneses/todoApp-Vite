import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: `All`,
    Completed: `Completed`,
    Pending: `Pending`
}

const state = {
    todos: [
        new Todo(`Piedra del alma`),
        new Todo(`Piedra del infinito`),
        new Todo(`Piedra del tiempo`),
    ],
    filter: Filters.All,
}

const initStrore = () => {
    console.log(state);
    console.log(`InitStore 👨🏻‍💻`);
}

export default {
    initStrore,
}