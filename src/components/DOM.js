//File will have functions for creating and updating UI elements

import TodoManager from "./TodoManager.js";
import Project from "./Project.js";
import Task from "./Task.js"

export default class DOM {
    //renders all the containers for task, projects, todomanager 
    constructor(){
        this.toDoManager = todoManager();
        this.addTaskButton = document.querySelector("create-task-btn")
        
        this.initializeEventListeners();
    }
    
    //Handle Add Projects

    //Render Projects


    //Handle Project Interactions 

    //Handle Add Task


    //Render Task Interactions 

    //intializeEventListenres

    initializeEventListeners(){
        this.addProjectButton.addEventListener('click',()=> this.handleAddProject);
    }


}