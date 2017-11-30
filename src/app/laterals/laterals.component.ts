import {Component, OnInit} from '@angular/core';
import {LateralsService} from '../services/laterals.service';
import {ILateral} from '../interface/ilateral';
import {isNullOrUndefined} from 'util';

@Component({
    selector: 'app-laterals',
    templateUrl: './laterals.component.html',
    styleUrls: ['./laterals.component.css']
})
export class LateralsComponent implements OnInit {
    laterals: [ILateral];
    tableSettings = {
        columns: {
            lateralname: {title: 'Lateral'},
            area: {title: 'Service Area'}
        },
        actions: false
    };

    constructor(private latsvc: LateralsService) {

    }

    ngOnInit() {
        this.latsvc.load((result) => {
            this.loaded();
        });
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
    }

}
