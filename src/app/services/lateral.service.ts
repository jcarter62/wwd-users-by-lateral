import {Injectable} from '@angular/core';
import {IMeter} from '../interface/imeter';
import {SettingsService} from './settings.service';
import {Http} from '@angular/http';
import {isNullOrUndefined} from 'util';

@Injectable()
export class LateralService {
    get meters(): Array<IMeter> {
        return this._meters;
    }
    private _meters = Array<IMeter>();
    private _allMeters = Array<IMeter>();

    title: string;

    constructor(
        private settings: SettingsService,
        private http: Http
    ) {
        this.title = '';
    }

    load( lateralParam: string, callback? ) {
        const options = this.settings.httpOptions();
        let url = this.settings.apiPrefix;
        url = url + '/wp-sp-mi-meters/';
        let lateral = '';

        if ( ! isNullOrUndefined(lateralParam)  ) {
               lateral = lateralParam.toUpperCase();
               this.title = lateral;
        }  else {
            this.title = 'All Laterals';
        }

        console.log(url);
        console.log(options);

        this.http.post(url, {}, options)
            .subscribe(
                (data) => {
                    const json = data.json();
                    this._allMeters = json.value;


                    if ( lateral.length <= 0 ) {
                        this._meters = this._allMeters;
                    } else {
                        const items = Array<IMeter>() ;
                        // Filter based on lateral name passed.
                        for ( const m of this._allMeters ) {
                            if ( m.latname.toUpperCase() === lateral  ) {
                                items.push(m);
                            }
                        }
                        this._meters = items;
                    }

                    if ( ! isNullOrUndefined(callback) ) {
                        callback();
                    }
                }
            );
    }
}
