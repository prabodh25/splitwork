import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewTaskPage } from '../new-task/new-task.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modalCtrl: ModalController) {}

  async openTaskModal(){
    const modal = await this.modalCtrl.create({
      component: NewTaskPage
    });
    return await modal.present();
  }

  

}
