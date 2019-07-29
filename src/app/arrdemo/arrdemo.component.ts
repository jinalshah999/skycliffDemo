import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-arrdemo',
  templateUrl: './arrdemo.component.html',
  styleUrls: ['./arrdemo.component.css']
})
export class ArrdemoComponent implements OnInit {

  arrtask:Task[]=[
    new Task('1','push your code to github','done'),
    new Task('2','learn angular','pending')
  ];
  constructor() { }

  ngOnInit() {
  }

}
