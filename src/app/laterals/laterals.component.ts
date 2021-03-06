import {AfterViewInit, Component, OnInit, ViewChildren} from '@angular/core';
import {LateralsService} from '../services/laterals.service';
import {ILateral} from '../interface/ilateral';
import {isNullOrUndefined} from 'util';
import {Router} from '@angular/router';

@Component({
    selector: 'app-laterals',
    templateUrl: './laterals.component.html',
    styleUrls: ['./laterals.component.css']
})
export class LateralsComponent implements OnInit, AfterViewInit {
    @ViewChildren('ng2-smart-table') t1;

    laterals: [ILateral];
    tableSettings = {
        columns: {
            lateralname: {title: 'Lateral'},
            area: {title: 'Service Area'}
        },
        actions: false,
        noDataMessage: '... Loading ...'
    };

    constructor(
        private latsvc: LateralsService,
        private router: Router
        ) {

    }

    ngOnInit() {
        this.latsvc.load((result) => {
            this.loaded();
        });
    }


    ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
        console.dir(window);

    }

    loaded() {
        this.laterals = this.latsvc.laterals;
        console.log(this.laterals);
    }

    userRowSelected(obj) {
        console.log(obj);
        let lateral = '';
        try {
            lateral = obj.selected[0].lateralname;
        } catch (e) {
            lateral = '';
        }
        console.log('Selected Lateral:' + lateral);

        if ( lateral > '' ) {
            this.router.navigate(['/lateral/' + lateral] );
        }

    }

}
