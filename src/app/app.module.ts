import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { DataComponent } from './data/data.component';
import { PnfComponent } from './pnf/pnf.component';
import { HomeComponent } from './home/home.component';
import { LateralsComponent } from './laterals/laterals.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MetersComponent } from './meters/meters.component';
import { AccountComponent } from './account/account.component';
import { MeterComponent } from './meter/meter.component';
import { LateralComponent } from './lateral/lateral.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SettingsComponent,
    DataComponent,
    PnfComponent,
    HomeComponent,
    LateralsComponent,
    AccountsComponent,
    MetersComponent,
    AccountComponent,
    MeterComponent,
    LateralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

