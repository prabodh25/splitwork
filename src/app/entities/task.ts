export class task{
    taskId:number;
    taskName:string;
    taskDetails:string;
    creator:number;
    evaluator:number;
    assignee:number;
    startDate:Date;
    dueDate:Date;
    isAlertNeeded:boolean;
    constructor(taskId:number, taskName:string, taskDetails:string, creator:number, evaluator:number,
        assignee:number, startDate:Date, dueDate:Date, isAlertNeeded:boolean){
            this.taskId=taskId;
            this.taskName=taskName;
            this.taskDetails=taskDetails;
            this.creator=creator;
            this.evaluator=evaluator;
            this.assignee=assignee;
            this.startDate=startDate;
            this.dueDate=dueDate;
            this.isAlertNeeded=isAlertNeeded;
    }
}