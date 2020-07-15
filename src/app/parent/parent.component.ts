import { Component, OnInit } from '@angular/core';
import { Simple } from '../child/simpleService';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(public service:Simple) { }

  ngOnInit(): void {
  }

}
