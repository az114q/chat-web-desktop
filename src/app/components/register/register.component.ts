import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.less']
})

export class RegisterComponent implements OnInit {
  constructor(
    public location: Location
  ) { }

  ngOnInit() { }
}
