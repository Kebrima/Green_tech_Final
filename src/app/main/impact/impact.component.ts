import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.css']
})
export class ImpactComponent implements OnInit {
  a = 0;
  b = 0;
  constructor() { }

  ngOnInit(): void {
  }
  hide(id){
    if (id === 1) {
      this.a = 0;
    }
    if (id === 2) {
      this.b = 0;
    }
  }
  open(id){
    if (id === 1) {
      this.a = 1;
    }
    if (id === 2) {
      this.b = 1;
    }
  }
}
