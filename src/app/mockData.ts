import { user } from './entities/user';
import { group } from './entities/group';
import { task } from './entities/task';

export class mockData{
    users:user[]=[];
    groups:group[]=[];
    tasks: task[]=[];

    constructor(){
        this.groups.push(new group(1,"Group 1", "Akshata assigned task to Prabodh", 2));
        this.groups.push(new group(2,"Group 2", "Preetam evaluated task", 12));
        this.groups.push(new group(3,"Group 3", "Task 1 is marked completed by Vivek", 5));
        this.groups.push(new group(4,"Group 4", "Prachi assigned task to Preetam", 15));
        this.groups.push(new group(5,"Group 5", "Group created", 5));
        this.groups.push(new group(6,"Group 6", "Group created", 7));
        this.groups.push(new group(7,"Group 7", "Group created", 0));
        this.groups.push(new group(8,"Group 8", "Group created", 0));
        this.groups.push(new group(9,"Group 9", "Group created", 0));
        this.groups.push(new group(10,"Group 10", "Group created", 0));
        this.groups.push(new group(11,"Group 11", "Group created", 0));
        this.groups.push(new group(12,"Group 12", "Group created", 0));
        this.groups.push(new group(13,"Group 13", "Group created", 0));
        this.groups.push(new group(14,"Group 14", "Group created", 0));
        this.groups.push(new group(15,"Group 15", "Group created", 0));
        this.groups.push(new group(16,"Group 16", "Group created", 0));

        this.tasks.push(new task(1, "Task 1", "Some task 1 to be done", 1, 2, 6, new Date(), new Date(), false));
        this.tasks.push(new task(2, "Task 2", "Some task 2 to be done", 1, 3, 5, new Date(), new Date(), false));
        this.tasks.push(new task(3, "Task 3", "Some task 3 to be done", 1, 4, 3, new Date(), new Date(), false));
        this.tasks.push(new task(4, "Task 4", "Some task 4 to be done", 1, 5, 2, new Date(), new Date(), false));
        this.tasks.push(new task(5, "Task 5", "Some task 5 to be done", 1, 6, 4, new Date(), new Date(), false));

        this.users.push(new user(1, "Prabodh", "Sawant"));
        this.users.push(new user(2, "Vivek", "Kadam"));
        this.users.push(new user(3, "Prachi", "Kadam"));
        this.users.push(new user(4, "Preetam", "Masaye"));
        this.users.push(new user(5, "Nikita", "Masaye"));
        this.users.push(new user(6, "Akshata", "Salunkhe"));
    }
}