import {Injectable} from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class SettingsService {
    get apikey(): string {
        return this._apikey;
    }

    set apikey(value: string) {
        this._apikey = value;
        localStorage.setItem('apikey', value );
    }

    get apiPrefix(): string {
        return this._apiPrefix;
    }

    set apiPrefix(value: string) {
        this._apiPrefix = value;
        localStorage.setItem('apiprefix', value);
    }

    private _apikey: string;
    private _apiPrefix: string;

    constructor() {
        this._apikey = '';
        this._apiPrefix = '';
        this.loadValues();
    }

    private loadValues() {
        this._apikey = localStorage.getItem('apikey');
        if ( isNullOrUndefined(this._apikey)  ) {
            this._apikey = '';
        }

        this._apiPrefix = localStorage.getItem('apiprefix');
        if ( isNullOrUndefined( this._apiPrefix) ) {
            this._apiPrefix = '';
        }
    }

    httpOptions() {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-cdata-authtoken': this.apikey
            })
        });

        return options;
    }
}