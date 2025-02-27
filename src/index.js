import './styles/main.css'
import DOM from "./components/DOM.js";




document.addEventListeners('DOMContentLoaded',()=>{
    const todoDom = new DOM();

    //Inital render
    //todoDom.renderProjects();
    todoDom.renderTasks();



})

