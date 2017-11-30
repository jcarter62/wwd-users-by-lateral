import { Component } from '@angular/core';
import { SettingsService } from './services/settings.service';
import {LateralsService} from './services/laterals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [ SettingsService, LateralsService ]
})
export class AppComponent {
  title = 'app';

}
