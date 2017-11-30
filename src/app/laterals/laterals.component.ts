import { Component, OnInit } from '@angular/core';
import {LateralsService} from '../services/laterals.service';
import {ILateral} from '../interface/ilateral';

@Component({
  selector: 'app-laterals',
  templateUrl: './laterals.component.html',
  styleUrls: ['./laterals.component.css']
})
export class LateralsComponent implements OnInit {
  laterals: [ILateral];

  constructor(
      private latsvc: LateralsService
  ) {

  }

  ngOnInit() {
    this.latsvc.load( (result) => { this.loaded(); }  );
  }

  loaded() {
    this.laterals = this.latsvc.laterals;
    console.log(this.laterals);
  }

}
