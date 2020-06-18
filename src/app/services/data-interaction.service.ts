import { Injectable } from '@angular/core';
import { mockData } from '../mockData';
import { user } from '../entities/user';
import { group } from '../entities/group';
import { task } from '../entities/task';


@Injectable({
  providedIn: 'root'
})
export class DataInteractionService {
  testData:mockData;
  constructor(  ) {
    this.testData = new mockData();
   }

  getUsers():user[]{
    return this.testData.users;
  }

  getGroups():group[]{
    return this.testData.groups;
  }

  getTasks():task[]{
    return this.testData.tasks;
  }
}
