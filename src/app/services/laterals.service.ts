import {Injectable} from '@angular/core';
import { ILateral } from '../interface/ilateral';
import {SettingsService} from './settings.service';
import {Http} from '@angular/http';
import {isNullOrUndefined} from 'util';

@Injectable()
export class LateralsService {
    get laterals(): [ILateral] {
        return this._laterals;
    }
    private _laterals: [ILateral];

    constructor(
        private settings: SettingsService,
        private http: Http
    ) {
        this.load();
    }

    load( callback? ) {
        const options = this.settings.httpOptions();
        let url = this.settings.apiPrefix;
        url = url + '/wp-sp-laterals-by-area/';

        console.log(url);
        console.log(options);

        this.http.post(url, {}, options)
            .subscribe(
                (data) => {
                    const json = data.json();
                    this._laterals = json.value;
                    if ( ! isNullOrUndefined(callback) ) {
                        callback();
                    }
                }
            );
    }
}
