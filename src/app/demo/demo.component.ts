import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  no:number=10;
  flag:boolean=false;
  str1:string='xyz';
  str:string='hello world';
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
