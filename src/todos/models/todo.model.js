export class Todo {
    
    constructor (description){
        this.id = 1;
        this.description = description;
        this.done = false;
        this.createAtt = new Date();
    }
}