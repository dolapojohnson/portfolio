import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  isFlipped = false;

  ngOnInit(): void {
  }

  flipCard() {
    this.isFlipped = !this.isFlipped
  }

}
