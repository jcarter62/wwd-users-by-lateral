import { Component, OnInit } from '@angular/core';
import { SettingsService} from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  apikey: string;
  apiprefix: string;

  constructor(
      private settings: SettingsService
  ) {
  }

  ngOnInit() {
      this.apikey = this.settings.apikey;
      this.apiprefix = this.settings.apiPrefix;
  }


  submitButton() {
      console.log('Saving form data');

      this.settings.apikey = this.apikey;
      this.settings.apiPrefix = this.apiprefix;
  }

}
