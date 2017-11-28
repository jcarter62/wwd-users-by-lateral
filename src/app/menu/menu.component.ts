import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import {forEach} from '@angular/router/src/utils/collection';
import {Routes} from '@angular/router';

interface IMenu {
  name: string;
  link: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private appRoutes = null;
  items = Array<IMenu>() ;
  title = '';

  constructor(
    private arm: AppRoutingModule
  ) {
  }

  ngOnInit() {
    this.appRoutes = this.arm.routes;
    this.title = this.arm.title;
    this.buildMenu(this.appRoutes);
  }

  private buildMenu(routes: Routes ) {
    const menuItems = Array<IMenu>();
    for ( const r of routes ) {
      if ( r.path !== '**' ) {
        if ( r.path.length > 0 ) {
          const i = {name: r.path, link: '/'.concat(r.path)  };
          menuItems.push(i);
        }
      }
    }

    console.dir(menuItems);

    this.items = menuItems;

  }

}
