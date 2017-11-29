import { Component, OnInit } from '@angular/core';
import {isUndefined} from 'util';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  apikey: string;

  constructor() {

  }

  ngOnInit() {
      console.log('ngOnInit, loading apikey');

      this.apikey = localStorage.getItem('apikey');
      if ( isUndefined(this.apikey) ) {
        this.apikey = '';
      }
      console.log('key=', this.apikey);

  }

  savekey() {
    console.log('saving key=', this.apikey);

    localStorage.setItem('apikey', this.apikey);
  }

}
