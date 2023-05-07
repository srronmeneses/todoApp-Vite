/*hack: ?raw forma de importar un HTML en crudo*/
import html from "./app.html?raw"; 

/**
 * 
 * @param {String} elemmentId lugar en donde se renderiza la App
 */
export const App = (elemmentId) => {
    (() => {
        const app = document.createElement(`div`);
        app.innerHTML = html;
        document.querySelector(elemmentId).append(app);
    })();
}