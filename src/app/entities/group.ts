export class group{
    groupId:number;
    name:string;
    latestUpdate:string;
    unreadCount:number;
    constructor(groupId:number, name:string, latestUpdate:string, unreadCount:number){
        this.groupId =groupId;
        this.name=name;
        this.latestUpdate=latestUpdate;
        this.unreadCount=unreadCount;
    }
}