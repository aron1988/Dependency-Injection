import { Component, OnInit } from '@angular/core';
import { Simple } from '../child/simpleService';
import { TtttService } from '../tttt.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:[Simple]
})
export class ParentComponent implements OnInit {

  constructor(public service:Simple,public serv:TtttService) { }

  ngOnInit(): void {
  }

}
