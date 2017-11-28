import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

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
  menu = [];
  title = '';

  constructor(
    private arm: AppRoutingModule
  ) {
  }

  ngOnInit() {
    this.appRoutes = this.arm.routes;
    this.menu = this.arm.menu;
    this.title = this.arm.title;
    this.buildMenu();
  }

  private buildMenu() {
    const menuItems = Array<IMenu>();
    for ( const r of this.menu ) {
      const i = {name: r.name, link: r.link };
      menuItems.push(i);
    }
    console.dir(menuItems);
    this.items = menuItems;
  }
}
