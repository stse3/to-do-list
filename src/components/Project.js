//manages the collection of tasks, seperates project ID
import {generateID} from "./Task.js";
export default class Project {
    constructor (name){
        this._id = generateID();
        this._name = name;
        this._taskList = []; //stores all Items
    }
    get id (){
        return this._id;
    }

    get name(){
        return this._name;
    }
    set name(val){
        if (val && typeof val === 'string'){ //
            this._name = val;
        }
    }
    set taskList(value) {
        if (Array.isArray(value)) {
            this._taskList = value;
        } else {
            throw new Error('TaskList must be an array');
        }
    }
    get taskList(){
        return this._taskList;
    }
    addTask (task){
        if (task instanceof Task){
            this._taskList.push(task);
            return task;
        }throw new Error ("Only Task Instances can be added to the Tasklist")
    }
    //return true if succesful 
    removeTask (taskId){
        const initalLen = this._taskList.length;
        this._taskList = this._taskList.filter(task=> task.id!==taskId);
        return intialLen> this._taskList.length;
    }
    
}