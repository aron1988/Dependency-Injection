import { Component, OnInit } from '@angular/core';
import { Simple } from './simpleService';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public service:Simple) { }

  ngOnInit(): void {
  }

}
