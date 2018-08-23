import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  firstName: string = "Geoff";
  
  constructor() { }

  ngOnInit() {
  }

}
