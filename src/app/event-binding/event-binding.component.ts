import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  showImage: boolean = false;
  imageWidth: number = 75;
  margin: number = 10;

  constructor() { }

  ngOnInit() {
  }

  toggleImage(){
    this.showImage = !this.showImage;
  }
}
