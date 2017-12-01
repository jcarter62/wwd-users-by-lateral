import { Component, OnInit } from '@angular/core';
import {IMeter} from '../interface/imeter';
import {LateralService} from '../services/lateral.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css'],
})
export class LateralComponent implements OnInit {
  private lateral: string;
  private sub: any;

  meters: Array<IMeter>;
  title: string;

  tableSettings = {
    columns: {
      meter: { title: 'Meter'},
        geo: { title: 'Geographic'}
    },
      actions: false,
      noDataMessage: '... Loading ...'
  };

  constructor(
      private latsvc: LateralService,
      private router: Router,
      private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.lateral = params['id'];
      this.latsvc.load(this.lateral, () => { this.loadCompleted(); } );
    });
  }



  private loadCompleted() {
    this.meters = this.latsvc.meters;
    this.title = this.latsvc.title;
    console.log(this.meters);
  }

  // User selected one meter, so now we display meter details.
  userRowSelected(data) {
      console.log(data);
      let meter = '';
      try {
          meter = data.selected[0].meter;
      } catch (e) {
          meter = '';
      }
      console.log('Selected Meter:' + meter);

      if ( meter > '' ) {
          this.router.navigate(['/meter/' + meter] );
      }
  }

}
