import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
no1:number=0;
no2:number=0;
ans:number=0;
  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    this.ans=this.no1+this.no2;
  }

}
