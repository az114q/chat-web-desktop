import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: 'people-list.component.html',
  styleUrls: ['people-list.component.less']
})

export class PeopleListComponent implements OnInit {
  loading = false;
  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];
  constructor() { }
  ngOnInit() {
  }
}
