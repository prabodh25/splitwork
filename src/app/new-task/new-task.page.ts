import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DataInteractionService } from '../services/data-interaction.service';
import { group } from '../entities/group';
import { user } from '../entities/user';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {
  public taskForm: FormGroup;
  groups: group[]=[];
  users: user[]=[];

  constructor(private formBuilder:FormBuilder, private modalCtrl: ModalController, private dbService:DataInteractionService) {
    this.groups = this.dbService.getGroups();
    this.users = this.dbService.getUsers();

    this.taskForm = this.formBuilder.group({
      groupId: new FormControl(0),
      taskId: new FormControl(0),
      groupName: new FormControl(this.groups[0], Validators.compose([
        Validators.required
      ])),
      taskName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      taskDetails: new FormControl('', Validators.compose([
        Validators.required
      ])),
      startDate: new FormControl(new Date().toISOString(), Validators.compose([
        Validators.required
      ])),
      dueDate: new FormControl(new Date().toISOString(), Validators.compose([
        Validators.required
      ])),
      assignees: new FormControl(this.users[0], Validators.compose([
        Validators.required
      ])),
      evaluator: new FormControl('', Validators.compose([
        Validators.required
      ])),
      creator: new FormControl(''),
      isAlertNeeded: new FormControl(false)
    });
   }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
