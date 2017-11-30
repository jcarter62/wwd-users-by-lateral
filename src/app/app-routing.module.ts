import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PnfComponent} from './pnf/pnf.component';
import {SettingsComponent} from './settings/settings.component';
import {HomeComponent} from './home/home.component';

import {AccountComponent } from './account/account.component';
import {AccountsComponent} from './accounts/accounts.component';
import {LateralComponent} from './lateral/lateral.component';
import {LateralsComponent} from './laterals/laterals.component';
import {MeterComponent} from './meter/meter.component';
import {MetersComponent} from './meters/meters.component';

const routeData: Routes = [
    { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'accounts', component: AccountsComponent, pathMatch: 'full' },
    { path: 'account', component: AccountComponent, pathMatch: 'full' },
    { path: 'laterals', component: LateralsComponent, pathMatch: 'full' },
    { path: 'lateral/:id', component: LateralComponent, pathMatch: 'full' },
    { path: 'meters', component: MetersComponent, pathMatch: 'full' },
    { path: 'meter', component: MeterComponent, pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: PnfComponent }
];

const menuData = [
    { name: 'Laterals', 'link': '/laterals' },
    { name: 'Accounts', 'link': '/accounts' },
    { name: 'Meters', 'link': '/meters' },
    { name: 'Settings', 'link': '/settings' }
];

@NgModule({
  imports: [RouterModule.forRoot(routeData , {enableTracing: true}  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

  public routes: Routes = null;
  public menu = null;
  public title = 'User\'s by Lateral';

  constructor() {
    this.routes = routeData;
    this.menu = menuData;
  }
}
