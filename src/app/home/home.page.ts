import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from '../services/data-interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  groups:any;
  pendingCount: number;
  evalutingCount: number;
  completeCount: number;

  constructor(private dataService: DataInteractionService) { 
    this.pendingCount = 30;
    this.evalutingCount = 20;
    this.completeCount = 10
    this.groups = dataService.getGroups();
  }

  ngOnInit() {
  }

}
