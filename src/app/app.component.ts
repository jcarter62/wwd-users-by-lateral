import { Component } from '@angular/core';
import { SettingsService } from './services/settings.service';
import {LateralsService} from './services/laterals.service';
import {LateralService} from './services/lateral.service';
import {MetersService} from './services/meters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [
        SettingsService,
        LateralsService,
        LateralService,
        MetersService
    ]
})
export class AppComponent {
  title = 'app';

}
