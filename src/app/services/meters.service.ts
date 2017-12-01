import {Injectable} from '@angular/core';
import {SettingsService} from './settings.service';
import {Http} from '@angular/http';
import {isNullOrUndefined} from 'util';
import {IMeterDetail} from '../interface/imeterdetail';

@Injectable()
export class MetersService {
    get meters(): Array<IMeterDetail> {
        return this._meters;
    }
    private _meters = Array<IMeterDetail>();

    constructor(
        private settings: SettingsService,
        private http: Http
    ) {
    }

    load( callback? ) {
        const options = this.settings.httpOptions();
        let url = this.settings.apiPrefix;
        url = url + '/wp-sp-mi-meterdetail/';

        const body =  {};

        this.http.post(url, body, options)
            .subscribe(
                (data) => {
                    console.log(data);

                    const json = data.json();
                    this._meters = json.value;

                    if ( ! isNullOrUndefined(callback) ) {
                        callback();
                    }
                }
            );
    }
}
