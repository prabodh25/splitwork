import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  groups:any;

  constructor() { 
    this.groups = [
      {name:"Group 1"},
      {name:"Group 2"},
      {name:"Group 3"},
      {name:"Group 4"},
      {name:"Group 5"},
      {name:"Group 6"}
    ];
  }

  ngOnInit() {
  }

}
