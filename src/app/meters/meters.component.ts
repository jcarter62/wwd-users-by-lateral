import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IMeterDetail} from '../interface/imeterdetail';
import {MetersService} from '../services/meters.service';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'app-meters',
  templateUrl: './meters.component.html',
  styleUrls: ['./meters.component.css']
})
export class MetersComponent implements OnInit {
  meters = Array<IMeterDetail>();

  tableSettings = {
        columns: {
            assetid: {title: 'Meter ID'},
            geo: {title: 'Geo'},
            lat: {title: 'Lateral'},
            area: {title: 'Service Area'}
        },
        actions: false,
        noDataMessage: '... Loading ...'
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

// userRowSelected(obj) {
//     console.log(obj);
//     let lateral = '';
//     try {
//         lateral = obj.selected[0].lateralname;
//     } catch (e) {
//         lateral = '';
//     }
//     console.log('Selected Lateral:' + lateral);
//
//     if ( lateral > '' ) {
//         this.router.navigate(['/lateral/' + lateral] );
//     }
//
// }
