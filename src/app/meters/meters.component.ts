import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IMeterDetail} from '../interface/imeterdetail';
import {MetersService} from '../services/meters.service';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'app-meters',
  templateUrl: './meters.component.html',
  styleUrls: ['./meters.component.css']
})
export class MetersComponent implements OnInit, AfterViewInit {
  meters = Array<IMeterDetail>();

  tableSettings = {
        columns: {
            assetid: {title: 'Meter ID'},
            geo: {title: 'Geo'},
            lat: {title: 'Lateral'},
            area: {title: 'Service Area'}
        },
        actions: false,
        noDataMessage: '... Loading ...',
        defaultStyle: false,
        attr: {
            class: 'mytable'
        }
    };

  source: LocalDataSource;

  constructor(
      private router: Router,
      private mtrsvc: MetersService
  ) {
    this.source = new LocalDataSource(this.meters);
  }

  ngOnInit() {
    this.mtrsvc.load((result)=>{ this.loaded(); } );
  }

  ngAfterViewInit() {
      console.log('After view init');
  }

  private loaded() {
    this.meters = this.mtrsvc.meters;
  }

  userRowSelected(obj) {

  }

  resetButton() {
    console.log('reset button pressed');
    this.source.setFilter([]);
    this.source.refresh();
  }
}
