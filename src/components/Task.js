export default class Task {
    constructor (title,note, dueDate, priority, completed=false){ 
        this._id = generateID();
        this._title = title;
        this._note = note;
        this._dueDate = dueDate;
        this._priority= priority;
        this._completed = completed; //bool

    }
    get title(){
        return this._title;
    }
    get note(){
        return this._note;
    }
    get dueDate(){
        return this._dueDate
    }
    get priority(){
        return this._priority;
    }
    get completed(){
        return this._completed;
    }
    set completed(value){
        this._completed = Boolean.value;
    }
    get id(){
        return this._id;
    }
    
    
}
export function generateID(){
    return '_' + Math.random().toString(36).substr(2, 9); 
}
