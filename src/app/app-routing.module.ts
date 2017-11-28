import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PnfComponent} from './pnf/pnf.component';
import {SettingsComponent} from './settings/settings.component';
import {HomeComponent} from './home/home.component';

const routeData: Routes = [
  { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PnfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routeData /*, {enableTracing: true} */ )],
  exports: [RouterModule]
})
export class AppRoutingModule {

  public routes: Routes = null;
  public title = 'User\'s by Lateral';

  constructor() {
    this.routes = routeData;
  }
}
