//Store current projects and tasks
//Keep track of the main DOM containers

import Task from "./Task.js";
import Project from "./Project.js";

export default class TodoManager{
    constructor(){
        this.projects = [];

        const defaultProj = new Project('Default');
        this.projects.push(defaultProj);
        this.currentProjectId = defaultProj.id;

    }

    addProject(name){
        const newProj = new Project (name);
        this.projects.push(newProj);
        return newProj;
        
    }
    deleteProject(projectId) {
        const initialLength = this.projects.length;
        //prevent from deleting the last currentProject
        if (this.projects.length===1){
            throw Error ("Cannot delete the last Project")
        }
        this.projects = this.projects.filter(project => project.id !== projectId);
         // If the current project was deleted, reset current project
        if (this.currentProjectId===projectId){
            this.currentProjectId= this.projects[0].id;
        }
        //return true if succesfully removed
        return initialLength > this.projects.length;

        
    }
    addTask(title,note,dueDate,priority){
        const currentProj = this.getCurrentProject();
        const newTask = new Task (title,note,dueDate, priority);
        currentProj.addTask(newTask);
        return newTask;
    }
    deleteTask(taskId){
        this.getCurrentProject().removeTask(taskId);
    }
    
    setCurrentProject(projectId) {
        const project = this.projects.find(proj => proj.id === projectId);
        
        if (!project) {
            throw new Error('Project not found');
        }
        
        this.currentProjectId = projectId;
        return project;
    }
    
    getCurrentProject(){
        if (this.currentProjectId){
            return this.projects.find(project=> project.id===this.currentProjectId)
        }
    }



}