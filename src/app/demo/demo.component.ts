import { Component, OnInit } from '@angular/core';
import { Task } from '../arrdemo/task';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
term:string='';
  no:number=10;
  flag:boolean=false;
  str1:string='xyz';
  str:string='hello world';
  arrtask:Task[]=[
    new Task('1','push your code to github','done'),
    new Task('2','learn angular','pending'),
    new Task('3','email to your manager','done'),
    new Task('4','go for running','done')

  ];
  constructor() { }
  ngOnInit() {  }
  onClick(){
    alert("hello");
  }
  onClickOnOff(){

        if(this.flag){
          this.flag=false;
        }
        else{
          this.flag=true;
        }
  }
}
